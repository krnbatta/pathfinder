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
      lines: [],
      rendered: false,
      app: null,
      renderer: null,
      stage: null,
      canvas: null,
      canvasPosition: {}
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
          that.setupRenderer();
          this.totalSteps = Object.keys(this.steps).length;
          that.runner = runnerFactory.call(that, steps);
          PlaybackService.init();
          FloatboxService.init();
        });
      },
      setupRenderer() {
        let width, height;
        let map = Store.find('Map');
        if(map){
          this.map = map;
          width = map.width;
          height = map.height;
        }
        else{
          width = this.tracer.width;
          height = this.tracer.height;
        }
        this.canvas = document.createElement("canvas");
        this.canvas.id = "canvas";
        $(".screen").append(this.canvas);
        this.canvasPosition = this.canvas.getBoundingClientRect();
        this.app = new PIXI.Application({
            width: width,
            height: height,
            view: this.canvas,
            transparent: true
        });
        this.renderer = this.app.renderer;
        this.stage = this.app.stage;
        this.renderer.render(this.stage);
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
        cleanCanvas();
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
