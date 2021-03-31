import * as PIXI from 'pixi.js'

import NodeObject from './node-object';
import config from '../config';
import Injector from '../services/injector';
import FloatboxService from '../services/floatbox';
import debounce from '../utils/debounce';
import drawLine from '../utils/draw-line';
import GraphicsManager from '../services/graphics-manager';

let _id = 1;

class Rectangle extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    this._id = _id;
    Object.assign(this, options.coordinates);
    _id++;
  }
  createGraphics(attrs){
    let self = this;
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(1, attrs.strokeStyle);
    _graphics.beginFill(attrs.fillStyle);
    _graphics.drawRect(this.x * config.nodeSize, this.y * config.nodeSize, config.nodeSize, config.nodeSize);
    _graphics.endFill();
    _graphics.interactive=true;
    _graphics.buttonMode=true;
    _graphics.on("mouseover", (e) => {
      _graphics.tint=attrs.fillStyle;
      let position  = {
        x: self.controller.x,
        y: self.controller.y
      }
      FloatboxService.execute(e, self.node.values, position);
    });
    _graphics.on("mouseout", () => {
      _graphics.tint="0xFFFFFF";
    });
    self.nodesHidden = true;
    let toggleNodes = debounce(function(){
      GraphicsManager.remove(self.controller, self.node.step.tracer.line);
      if(self.nodesHidden){
        self.node.step.tracer.line = drawLine(self.controller, self.node, 0xE40E40);
        self.nodesHidden = false;
      }
      else{
        self.nodesHidden = true;
      }
    });
    _graphics.on("click", () => {
      toggleNodes();
    });
    Injector.inject(this, ['controller', 'renderer']);
    return _graphics;
  }
  get graphics(){
    if(!this._graphics){
      this._graphics = this.createGraphics(this.node.attrs);
    }
    return this._graphics;
  }
  get center(){
    return {x: config.nodeSize*(this.x+0.5), y: config.nodeSize*(this.y+0.5)}
  }
  get maxX(){
    return this.x;
  }
  get maxY(){
    return this.y;
  }
  get minX(){
    return this.x;
  }
  get minY(){
    return this.y;
  }
}

export default Rectangle;
