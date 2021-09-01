import * as PIXI from 'pixi.js'

import NodeObject from './node-object';
import config from '../config';
import debounce from '../utils/debounce';
import GraphicsStore from '../services/graphics-store';

let _id = 0;

class Rectangle extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    this._id = _id;
    Object.assign(this, options.coordinates);
    _id++;
  }

  mouseoverEventHandler() {
    this.graphics.tint = this.node.attrs.darkColor;
  }

  mouseoutEventHandler() {
    if (this.node.tracer.inspectedNodeObject == this) return;
    this.graphics.tint = this.node.attrs.fillStyle;
  }

  clickEventHandler() {
    const toggleNodesFn = this.toggleNodes();
    toggleNodesFn();
  }

  toggleNodes() {
    const self = this;
    self.nodesHidden = true;
    return debounce(function(){
      self.node.tracer.inspectedNodeObject = self;
    });
  }
  
  renderGraphics(){
    let rect = GraphicsStore.getRect(this);
    rect.removeAllListeners();
    rect.on('click', this.clickEventHandler.bind(this));
    rect.on('mouseover', this.mouseoverEventHandler.bind(this));
    rect.on('mouseout', this.mouseoutEventHandler.bind(this));
    this.graphics = rect;
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
