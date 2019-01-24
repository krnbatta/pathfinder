import Store from '../services/Store'
import config from '../config'
import nodeColor from '../utils/node-color';
import nodeFactory from '../utils/node-factory';

let _id = 1;

class Node {
  constructor(options) {
    this._id = _id;
    Object.assign(this, options);
    this._linePoints = null;
    _id++;
  }

  get attrs() {
    let nodeAttrs = config.nodeAttrs[nodeColor[this.type]];
    if(this.id==this.step.tracer.source.node.id){
      nodeAttrs=config.nodeAttrs['source'];
    }
    if(this.id==this.step.tracer.destination.node.id){
      nodeAttrs=config.nodeAttrs['destination'];
    }
    let x = config.nodeSize*this.x;
    let y = config.nodeSize*this.y;
    return {
      x: x,
      y: y,
      width: config.nodeSize,
      height: config.nodeSize,
      fillStyle: nodeAttrs.fillColor,
      strokeStyle: 'black',
      strokeWidth: 0.1
    }
  }

  get domElement() {
    let x, y;
    if (!this._domElement){
      this._domElement = nodeFactory(this.attrs, this.values);
    }
    return this._domElement;
  }

  get step(){
    return Store.data.Step[this.stepId];
  }

  get parentNode(){
    if(!this.pId){
      return null;
    }
    let pNode = null;
    Object.values(Store.data.Node).forEach((node) => {
      if(node.id == this.pId){
        pNode = node;
        return;
      }
    });
    return pNode;
  }

  get center(){
    return {x: config.nodeSize*(this.x+0.5), y: config.nodeSize*(this.y+0.5)};
  }

  get linePoints(){
    if(!this._linePoints){
      if(!this.parentNode){
        return [this.center];
      }
      let points = this.parentNode.linePoints.slice();
      points.push(this.center);
      this._linePoints = points;
    }
    return this._linePoints;
  }

  get values(){
    return {
      id: this.id,
      type: this.type,
      pId: this.pId,
      f: this.f,
      g: this.g,
      h: this.h
    }
  }

}

export default Node;
