import StateMachine from "javascript-state-machine";
import Components from './components';
import EventsListComponent from './components/events-list/component';
import PlaybackService from './services/playback';
import FloatboxService from './services/floatbox';
import Store from './services/Store';
import config from './config';
import $ from 'jquery';
import drawLine from './utils/draw-line';
import insertNode from './utils/insert-node';
import runnerFactory from './services/runner';
import Renderer from './services/renderer';
import mouseTracker from './services/mouse-tracker';

//Contrller is in 2 states: none and ready.
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
    data: {
      //frontierHistory =>
      frontierHistory: [],
      //frontierRects =>
      frontierRects: [],
      //line =>
      line: null,
      //runner =>
      runner: null,
      //currentId =>
      currentId: 1,
      //history =>
      history: [],
      //lines =>
      lines: [],
      //rendered =>
      rendered: false,
      //app =>
      app: null,
      //renderer =>
      renderer: null,
      //stage =>
      stage: null,
      //canvas =>
      canvas: null,
      //canvasPosition =>
      canvasPosition: {}
    },
    methods: {
      //called when the Controller is initiated(init transition) i.e. none to ready state
      //initiates all the components on the page.
      onInit() {
        mouseTracker(this);
        Components.forEach((component) => {
          component.init();
        });
      },
      //called when Controller has entered ready state by init transition
      //setup play and reset callback in playback service with Controller context
      onReady() {
        PlaybackService.addCallback('play', this.loop.bind(this));
        PlaybackService.addCallback('reset', this.reset.bind(this));
      },
      //called when Controller is started(start transition) i.e. ready to running state
      //
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
      setupRenderer() {
        if(!this.rendered){
          let width, height;
          //TODO
          let map = Store.find('Grid');
          // let map = Store.find('Mesh');
          if(map){
            this.map = map;
            width = map.width;
            height = map.height;
          }
          else{
            width = this.tracer.width;
            height = this.tracer.height;
          }
          Renderer.render(this, width, height);
        }
      },
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
      retraceHistory(id) {
        this.historyRetraced = true;
        this.cleanCanvas();
        for(let i = 1; i<=id; i++){
          let rectangle = this.history[i];
          insertNode(this, rectangle);
        }
        this.currentId = id+1;
        this.frontierRects = this.frontierHistory[id];
        this.frontierRects.forEach((rectangle) => {
          insertNode(this, rectangle);
        });
        this.stage.removeChild(this.line);
        this.line = this.lines[id];
        this.stage.addChild(this.line);
      },
      clearFutureData() {
        if(this.historyRetraced){
          this.lines.length = this.currentId;
          this.history.length = this.currentId;
          this.frontierHistory.length = this.currentId;
          EventsListComponent.clearEvents(this.currentId-1);
          this.historyRetraced = false;
        }
      },
      stepForward() {
        this.clearFutureData();
        if(this.currentId >= this.totalSteps && PlaybackService.state != 'paused'){
          PlaybackService.pause();
        }
        let currentStep = this.steps[this.currentId];
        this.runner();
        EventsListComponent.addEvent(currentStep);
      },
      cleanCanvas() {
        for(let i = 1; i<=this.currentId; i++){
          let rectangle = this.history[i];
          this.stage.removeChild(rectangle);
        }
        for(let i = 0; i<this.frontierRects.length; i++){
          let rectangle = this.frontierRects[i];
          this.stage.removeChild(rectangle);
        }
        this.stage.removeChild(this.line);
      },
      reset() {
        this.cleanCanvas();
        this.currentId = 1;
        this.history = [];
        this.frontierRects = [];
        this.frontierHistory = [];
        EventsListComponent.clearEvents(this.currentId);
      },
      stepBackward() {
        this.clearFutureData();
        if(this.currentId == 1){
          return;
        }
        this.currentId -= 1;
        let rectangle = this.history.pop();
        this.stage.removeChild(rectangle);
        let frontiers = this.frontierHistory.pop();
        let prevFrontiers = this.frontierHistory[this.currentId-1];
        this.frontierRects = prevFrontiers;
        if(frontiers.length){
          let difference = frontiers.filter(x => !prevFrontiers.includes(x));
          difference.forEach((child) => {
            this.stage.removeChild(child);
          });
        }
        else if(prevFrontiers.length){
          prevFrontiers.forEach((rect) => {
            this.stage.addChild(rect);
          });
        }
        let line = this.lines.pop();
        this.stage.removeChild(line);
        this.stage.addChild(this.lines[this.lines.length-1]);
        EventsListComponent.removeEvent();
      }
    }
});
window.controller = Controller;
export default Controller;
