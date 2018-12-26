import StateMachine from "javascript-state-machine";
import Components from './components';
import Playback from './services/playback';
import Store from './services/Store';
import config from './config';
import $ from 'jquery';

let Controller = new StateMachine({
  transitions: [{
        name: 'init',
        from: 'none',
        to: 'ready'
      },
      {
        name: 'start',
        from: 'ready',
        to: 'starting'
      },
      {
        name: 'search',
        from: 'starting',
        to: 'searching'
      },
      {
        name: 'pause',
        from: 'searching',
        to: 'paused'
      },
      {
        name: 'resume',
        from: 'paused',
        to: 'searching'
      },
      {
        name: 'reset',
        from: '*',
        to: 'ready'
      }
    ],
    methods: {
      onBeforeTransition() {
        console.log(`onBeforeTransition => ${this.state}`);
        console.log(arguments);
      },
      onBeforeNone() {
        console.log(`onBeforeNone => ${this.state}`);
        console.log(arguments);
      },
      onLeaveState() {
        console.log(`onLeaveState => ${this.state}`);
        console.log(arguments);
      },
      onLeaveNone() {
        console.log(`onLeaveNone => ${this.state}`);
        Components.forEach((component) => {
          component.init();
        });
        console.log(arguments);
      },
      onTransition() {
        console.log(`onTransition => ${this.state}`);
        console.log(arguments);
      },
      onEnterState() {
        console.log(`onEnterState => ${this.state}`);
        console.log(arguments);
      },
      onEnterReady() {
        console.log(`onEnterReady => ${this.state}`);
        console.log(arguments);
      },
      onAfterTransition() {
        console.log(`onAfterTransition => ${this.state}`);
        console.log(arguments);
      },
      onAfterInit() {
        console.log(`onAfterInit => ${this.state}`);
        console.log(arguments);
      },
      onBeforeStart() {
        this.tracer = Store.find('Tracer');
        let that = this;
        this.tracer.steps.then((steps) => {
          if(config.renderType=='svg'){
            that.svgRunner(steps);
          }
          else{
            that.canvasRunner(steps);
          }
        });
      },
      svgRunner(steps) {
        let svgNode = this.tracer.svgNode;
        $('#tracer-canvas').append(svgNode);
        let runner = ((id) => {
          if(id >= Object.keys(steps).length){
            return;
          }
          svgNode.append(steps[id].node.domElement);
          window.requestAnimationFrame(runner.bind(this, ++id));
        });
        window.requestAnimationFrame(runner.bind(this, 1));
      },
      canvasRunner(steps) {
        let canvas = this.tracer.canvas;
        let ctx = canvas.getContext('2d');
        let runner = ((id) => {
          if(id >= Object.keys(steps).length){
            return;
          }
          let attrs = steps[id].node.domElement;
          ctx.fillStyle = attrs.fillStyle;
          ctx.strokeStyle = attrs.strokeStyle;
          ctx.fillRect(attrs.x, attrs.y, attrs.width, attrs.height);
          ctx.strokeRect(attrs.x, attrs.y, attrs.width, attrs.height);
          window.requestAnimationFrame(runner.bind(this, ++id));
        });
        window.requestAnimationFrame(runner.bind(this, 1));
      }
    }
});
export default Controller;
