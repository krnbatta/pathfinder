import StateMachine from "javascript-state-machine";
import Components from './components';
import EventsListComponent from './components/events-list/component';
import PlaybackService from './services/playback';
import Store from './services/Store';
import config from './config';
import $ from 'jquery';
import drawLine from './utils/webgl/draw-line';
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
      frontierNodes: [],
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
        });
      },
      setupRenderer() {
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
        let rectangles = this.history.pop();
        rectangles.forEach((rectange) => {
          this.stage.removeChild(rectange);
        });
        let line = this.lines.pop();
        this.stage.removeChild(line);
        this.stage.addChild(this.lines[this.lines.length-1]);
        EventsListComponent.removeEvent();
      }
    }
});
export default Controller;
