import StateMachine from "javascript-state-machine";
import Components from './components';
import EventsListComponent from './components/events-list/component';
import PlaybackService from './services/playback';
import FloatboxService from './services/floatbox';
import Store from './services/Store';
import config from './config';
import $ from 'jquery';
import drawLine from './utils/draw-line';
import getRunnerFactory from './services/runner';

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
      frontierHistory: [],
      frontierRects: [],
      line: null,
      runner: null,
      currentId: 1,
      history: [],
      lines: []
    },
    methods: {
      onInit() {
        Components.forEach((component) => {
          component.init();
        });
      },
      onReady() {
        PlaybackService.addCallback('play', this.loop.bind(this));
        PlaybackService.addCallback('reset', this.reset.bind(this));
      },
      onStart() {
        this.tracer = Store.find('Tracer');
        let that = this;
        this.tracer.steps.then((steps) => {
          this.steps = steps;
          let runnerFactory = getRunnerFactory.call(that, steps);
          that.setupRenderer();
          that.runner = runnerFactory();
          PlaybackService.init();
          FloatboxService.init();
        });
      },
      setupRenderer() {
        if(config.renderType=='webgl'){
          this.app = new PIXI.Application({
              width: this.tracer.maxX * config.nodeSize,
              height: this.tracer.maxY * config.nodeSize,
              view: document.getElementById("tracer-canvas"),
              transparent: true
          });
          this.renderer = this.app.renderer;
          this.stage = this.app.stage;
          this.totalSteps = Object.keys(this.steps).length;
          this.renderer.render(this.stage);
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
      stepForward() {
        if(this.currentId >= this.totalSteps && PlaybackService.state != 'paused'){
          PlaybackService.pause();
        }
        let currentStep = this.steps[this.currentId];
        this.runner();
        EventsListComponent.addEvent(currentStep);
      },
      reset() {
        this.currentId = 1;
        this.renderer.clear();
        this.setupRenderer();
      },
      stepBackward() {
        if(this.currentId == 1){
          return;
        }
        this.currentId -= 1;
        let rectangle = this.history.pop();
        this.stage.removeChild(rectangle);
        let frontiers = this.frontierHistory.pop();
        let prevFrontiers = this.frontierHistory[this.currentId-1];
        if(frontiers.length){
          let difference = frontiers.filter(x => !prevFrontiers.includes(x));
          this.stage.removeChild(difference);
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
