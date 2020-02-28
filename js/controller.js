import StateMachine from "javascript-state-machine";
import Components from './components';
import EventsListComponent from './components/events-list/component';
import PlaybackService from './services/playback';
import FloatboxService from './services/floatbox';
import FrontierService from './services/frontier';
import HistoryService from './services/history';
import SearchPathService from './services/search-path';
import Store from './services/store';
import config from './config';
import $ from 'jquery';
import insertNode from './utils/insert-node';
import runnerFactory from './services/runner';
import Renderer from './services/renderer';
import mouseTracker from './services/mouse-tracker';
import Injector from './services/injector';
/**
* @module controller
* The controller is the main part which controls the whole app. It is a StateMachine with 3 states: none, ready and running. Init transition changes state from none to ready. Start transition changes state from ready to running.
*/
let Controller = new StateMachine({
  transitions: [{
        name: 'init',
        from: 'none',
        to: 'ready'
      },
      {
        name: 'start',
        from: 'ready',
        to: 'running'
      }
    ],

    /**
    * Data of this state machine has keeps all the variables required for functioning.
    */
    data: {
      //runner => The runner is function looper that runs every step of the algorithm serially.
      runner: null,
      //currentId => Id of the current step being run
      currentId: 1,
      //rendered => If the canvas has been rendered on the screen or not.
      rendered: false,
      //app => PIXI.Application object
      app: null,
      //renderer => app.renderer
      renderer: null,
      //stage => app.stage
      stage: null,
      //canvas => DOM element canvas
      canvas: null
    },
    methods: {
      /**
      * @function onInit
      * This function is called when the Controller is initiated(init transition) i.e. none to ready state. It initiates all the components on the page.
      */
      onInit() {
        mouseTracker(this);
        Components.forEach((component) => {
          component.init();
        });
        HistoryService.init(this);
        FrontierService.init(this);
        SearchPathService.init(this);
      },

      /**
      * @function onReady
      * This function is called when the Controller has entered ready state by init transition. It setup play and reset callback in playback service with Controller context.
      */
      onReady() {
        PlaybackService.addCallback('play', this.loop.bind(this));
        PlaybackService.addCallback('reset', this.reset.bind(this));
      },

      /**
      * @function onStart
      * This function is called when Controller is started(start transition) i.e. ready to running state. It is basically called when the algorithm is uploaded and app can be in running state. It calculates total steps in the algorithm, setups runner and initiates Playback and Floatbox services.
      */
      onStart() {
        this.tracer = Store.find('Tracer');
        let that = this;
        this.tracer.steps.then((steps) => {
          this.steps = steps;
          that.setupRenderer();
          this.totalSteps = Object.keys(this.steps).length;
          that.runner = runnerFactory.call(that, steps);
          PlaybackService.init();
          FloatboxService.init();
        });
      },

      getMap(){
        let map = Store.find('Map');
        if(map && map.mapType == "grid"){
          map = Store.find('Grid');

        }
        else if(map && map.mapType == "mesh"){
          map = Store.find('Mesh');
        }
        else if(map && map.mapType == "roadnetwork"){
          map = Store.find('RoadNetwork');
        }
        return map;
      },

      getDimensions(){
        let width, height;
        let map = this.getMap();
        if(map){
          this.map = map;
          width = map.width;
          height = map.height;
        }
        else{
          width = this.tracer.width;
          height = this.tracer.height;
        }
        return {width, height}
      },

      /**
      * @function setupRenderer
      * This function initiates the canvas by map's height and width if it is uploaded. Otherwise, just algorithm's max width and height used. Renderer service is used to render.
      */
      setupRenderer() {
        if(!this.rendered){
          let {width, height} = this.getDimensions();
          Renderer.render(this, width, height);
        }
      },

      /**
      * @function loop
      * This function is called by playback play control and keeps stepping forward unless paused or stopped.
      */
      loop() {
        let self = this;
        (function loop(){
          if(!PlaybackService.is("running")){
            return;
          }
          self.stepForward();
          window.requestAnimationFrame(loop);
        })();
      },

      /**
      * @function retraceHistory
      * This function removes everything from canvas. Draws all the objects from the history. Also draws the line.
      * @param {number} id - id of the step at which algorithm is to be retraced.
      */
      retraceHistory(id) {
        this.historyRetraced = true;
        this.cleanCanvas();
        HistoryService.retraceHistory(id);
        FrontierService.retraceHistory(id);
        SearchPathService.retraceHistory(id);
      },

      /**
      * @function clearFutureData
      * This function clears all the data by limiting rectangles, frontierHistory and lines history with currentId.
      */
      clearFutureData() {
        if(this.historyRetraced){
          SearchPathService.clearFuture();
          HistoryService.clearFuture();
          FrontierService.clearFuture();
          EventsListComponent.clearEvents(this.currentId-1);
          this.historyRetraced = false;
        }
      },

      /**
      * @function stepForward
      * This function calls runner to draw the current step and also add step text.
      */
      stepForward() {
        this.clearFutureData();
        if(this.currentId >= this.totalSteps && PlaybackService.state != 'paused'){
          PlaybackService.pause();
        }
        let currentStep = this.steps[this.currentId];
        this.runner();
        EventsListComponent.addEvent(currentStep);
      },

      /**
      * @function cleanCanvas
      * This function removes all the rectangles from history, frontierRects and lines from the canvas.
      */
      cleanCanvas() {
        HistoryService.clean();
        FrontierService.clean();
        SearchPathService.clean();
      },

      /**
      * @function reset
      * This function resets everything to the start.
      */
      reset() {
        this.cleanCanvas();
        HistoryService.reset();
        FrontierService.reset();
        EventsListComponent.clearEvents(this.currentId);
      },

      /**
      * @function stepBackward
      * This function decrements the current id. It removes the current rectangle. It removes the new frontier rectanges if added in current step or retraces the frontier rectangles that were in the previous step. It also removes the current line and adds the previous line. It also removes the current even text from the list.
      */
      stepBackward() {
        this.clearFutureData();
        if(this.currentId == 1){
          return;
        }
        this.currentId -= 1;
        HistoryService.stepBackward();
        FrontierService.stepBackward();
        SearchPathService.stepBackward();
        EventsListComponent.removeEvent();
      }
    }
});
Injector.register('controller', Controller);

window.controller = Controller;
export default Controller;
