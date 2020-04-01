import * as PIXI from 'pixi.js'

import NodeObject from './node-object';
import config from '../config';
import Injector from '../services/injector';
import Store from '../services/store';
import FloatboxService from '../services/floatbox';
import debounce from '../utils/debounce';
import drawLine from '../utils/draw-line';
import GraphicsManager from '../services/graphics-manager';

let _id = 1;

class Circle extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    this._id = _id;
    Object.assign(this, options.coordinates);
    this.r = 0.25 * config.nodeSize;
    this.lineSize = 1;
    if(config.mapType && config.mapType == 'roadnetwork'){
      this.r = 2;
      this.lineSize = 0.75;
    }
    _id++;
  }
  createGraphics(attrs){
    let self = this;
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(this.lineSize, attrs.strokeStyle);
    _graphics.beginFill(attrs.fillStyle);
    _graphics.drawCircle(this.cx*config.nodeSize, this.cy*config.nodeSize, this.r);
    _graphics.endFill();
    _graphics.interactive=true;
    _graphics.buttonMode=true;
    Injector.inject(this, ['controller', 'renderer']);
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
      let circles = Store.where("Circle", {cx: self.cx, cy: self.cy});
      if(self.nodesHidden){
        circles.forEach((circle) => {
          circle.node.showUnPersistedPart();
        });
        self.line = drawLine(self.controller, self.node, 0xF9D276);
        self.nodesHidden = false;
      }
      else{
        circles.forEach((circle) => {
          circle.node.hideUnPersistedPart();
        });
        GraphicsManager.remove(self.controller, self.line);
        self.nodesHidden = true;
      }
    });
    _graphics.on("click", () => {
      toggleNodes();
    });
    // let texture = this.renderer.generateTexture(_graphics);
    // let circleSprite = new PIXI.Sprite(texture);
    return _graphics;
  }
  get graphics(){
    if(!this._graphics){
      this._graphics = this.createGraphics(this.node.attrs);
    }
    return this._graphics;
  }
  get center(){
    return {x: config.nodeSize*(this.cx), y: config.nodeSize*(this.cy)};
  }
  get maxX(){
    return this.cx;
  }
  get maxY(){
    return this.cy;
  }
  get minX(){
    return this.cx;
  }
  get minY(){
    return this.cy;
  }
}

export default Circle;
