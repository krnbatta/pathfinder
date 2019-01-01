import StateMachine from "javascript-state-machine";
import Components from './components';
import Playback from './services/playback';
import Store from './services/Store';
import config from './config';
import $ from 'jquery';
import drawLine from './utils/webgl/draw-line';

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
    data: {
      frontierNodes: [],
      line: null
    },
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
            that.webGLRunner(steps);
          }
        });
      },
      svgRunner(steps) {
        let startTime = new Date();
        let svgNode = this.tracer.svgNode;
        $('#tracer-canvas').append(svgNode);
        let runner = ((id) => {
          if(id >= Object.keys(steps).length){
            let endTime = new Date();
            alert(endTime - startTime);
            return;
          }
          svgNode.append(steps[id].node.domElement);
          window.requestAnimationFrame(runner.bind(this, ++id));
        });
        window.requestAnimationFrame(runner.bind(this, 1));
      },

      canvasRunner(steps) {
        let startTime = new Date();
        let canvas = this.tracer.canvas;
        let ctx = canvas.getContext('2d');
        let totalSteps = Object.keys(steps).length;
        let runner = ((id) => {
          if(id >= totalSteps){
            let endTime = new Date();
            alert(endTime - startTime);
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
      },

      webGLRunner(steps){
        let startTime = new Date();
        var app = new PIXI.Application({width: this.tracer.maxX*config.nodeSize, height: this.tracer.maxY*config.nodeSize, view: document.getElementById("tracer-canvas"), transparent: true});
        let renderer = app.renderer;
        renderer.backgroundColor = "#fff";
        let stage = app.stage;
        renderer.render(stage);
        let runner = ((id) => {
          if(id > Object.keys(steps).length){
            let endTime = new Date();
            alert(endTime - startTime);
            return;
          }
          let step = steps[id];
          let node = step.node;
          let attrs = node.domElement;
          let fillStyle = attrs.fillStyle;
          if(step.type == 'source'){
            this.source = node;
          }
          if(step.type == 'destination'){
            this.destination = node;
          }
          if(step.type == 'generating' || step.type == 'updating'){
            if(!(this.source && node.id == this.source.id) && !(this.destination && node.id == this.destination.id)){
              this.frontierNodes.push(node);
              fillStyle = config.nodeAttrs.frontier.fillColor;
            }
          }
          if(this.source && node.id == this.source.id){
            fillStyle = config.nodeAttrs.source.fillColor;
          }
          if(this.destination && node.id == this.destination.id){
            fillStyle = config.nodeAttrs.destination.fillColor;
          }
          if(step.type == 'closing'){
            this.frontierNodes.forEach((fNode) => {
              let fAttrs = fNode.domElement;
              let rectangle = new PIXI.Graphics();
              rectangle.lineStyle(1, fAttrs.strokeStyle);
              rectangle.beginFill(fAttrs.fillStyle);
              rectangle.drawRect(fAttrs.x, fAttrs.y, fAttrs.width, fAttrs.height);
              rectangle.endFill();
              stage.addChild(rectangle);
            });
            this.frontierNodes = [];
          }
          let rectangle = new PIXI.Graphics();
          rectangle.lineStyle(1, attrs.strokeStyle);
          rectangle.beginFill(fillStyle);
          rectangle.drawRect(attrs.x, attrs.y, attrs.width, attrs.height);
          rectangle.endFill();
          stage.addChild(rectangle);
          stage.removeChild(this.line);
          this.line = drawLine(node, stage);
          window.requestAnimationFrame(runner.bind(this, ++id));
        });
        window.requestAnimationFrame(runner.bind(this, 1));
      }
    }
});
export default Controller;
