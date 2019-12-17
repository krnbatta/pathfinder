import Store from '../services/Store'
import config from '../config'
import nodeColor from '../utils/node-color';
import nodeFactory from '../utils/node-factory';

let _id = 1;

class NodeObject {

  constructor(options){
    Object.assign(this, options);
  }

  hide(){
    this.graphics.visible = false;
  }

  show(){
    this.graphics.visible = true;
  }

  // get node(){
  //   return Store.data.Node[this.nodeId];
  // }
}

export default NodeObject;
