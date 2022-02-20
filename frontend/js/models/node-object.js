import Store from '../services/store'
import config from '../config'
import nodeColor from '../utils/node-color';
import nodeFactory from '../utils/node-factory';

let _id = 0;

class NodeObject {

  constructor(options){
    Object.assign(this, options);
  }

  hide(){
    this.graphics.visible = false;
  }

  show(){
    if(!this.graphics) return;
    this.graphics.visible = true;
  }

  get tracer() {
    return this.node.tracer;
  }

  get controller() {
    return this.tracer.controller;
  }

  // get node(){
  //   return Store.data.Node[this.nodeId];
  // }
}

export default NodeObject;
