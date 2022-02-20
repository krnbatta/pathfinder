import * as PIXI from 'pixi.js'

import NodeObject from './node-object';
import config from '../config'
import Injector from '../services/injector';
import graphicsManager from '../services/graphics-manager';

let _id = 0;

class Polygon extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    this._id = _id;
    Object.assign(this, options.coordinates);
    _id++;
  }
  
  renderGraphics() {
    this.graphics = this.createGraphics(this.node.polygonAttrs);
    graphicsManager.insert(this.controller, this.graphics);
  }

  createGraphics(attrs){
    let self = this;
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(1, attrs.fillStyle);
    _graphics.beginFill(attrs.fillStyle);
    _graphics.drawPolygon(this.points.map((pt) => pt*config.nodeSize));
    _graphics.endFill();
    _graphics.alpha = 0.5;
    _graphics.interactive=true;
    _graphics.buttonMode=true;
    Injector.inject(this, ['renderer']);
    _graphics.on("click", (e) => {
      self.node.tracer.inspectedNodeObject = self;
    });
    _graphics.on("mouseover", () => {
      _graphics.tint = attrs.fillStyle;;
    });
    _graphics.on("mouseout", () => {
      if (self.node.tracer.inspectedNodeObject == self) return;
      _graphics.tint = "0xFFFFFF";
    });

    let texture = this.renderer.generateTexture(_graphics);
    let polygonSprite = new PIXI.Sprite(texture);
    polygonSprite = _graphics;
    return polygonSprite;
  }

  // get graphics(){
  //   if(!this._graphics){
  //     this._graphics = this.createGraphics(this.node.polygonAttrs);
  //   }
  //   return this._graphics;
  // }

  get maxX(){
    let xcoords = this.points.filter((a,i)=>i%2===0);
    return Math.max(...xcoords);
  }

  get maxY(){
    let ycoords = this.points.filter((a,i)=>i%2===1);
    return Math.max(...ycoords);
  }

  get minX(){
    let xcoords = this.points.filter((a,i)=>i%2===0);
    return Math.min(...xcoords);
  }

  get minY(){
    let ycoords = this.points.filter((a,i)=>i%2===1);
    return Math.min(...ycoords);
  }
}

export default Polygon;
