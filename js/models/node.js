import Store from '../services/Store'
// import {nodeSize, nodeAttrs, xmlns} from '../config'
import config from '../config'
import nodeColor from '../utils/node-color';

let _id = 1;

class Node {
  constructor(options) {
    this._id = _id;
    Object.assign(this, options);
    _id++;
  }

  get domElement() {
    let x, y;
    if (!this._domElement){
      let attrs = config.nodeAttrs[nodeColor[this.type]];
      if(["expanding", "updating", "closing", "end"].indexOf(this.type)!=-1){
        for(let nodeId in this.step.nodes){
          let node = this.step.nodes[nodeId];
          if(node.id==this.id && ["expanding", "updating", "closing", "end"].indexOf(node.type)==-1){
            x = config.nodeSize*node.x;
            y = config.nodeSize*node.y;
            break;
          }
        }
      }
      else{
        x = config.nodeSize*this.x;
        y = config.nodeSize*this.y;
      }
      if(config.renderType=='svg'){
        let elem = document.createElementNS(config.xmlns, "rect");
        elem.setAttributeNS(null, "width", config.nodeSize);
        elem.setAttributeNS(null, "height", config.nodeSize);
        elem.setAttributeNS(null, "fill", attrs.fillColor);
        elem.setAttributeNS(null, "x", x);
        elem.setAttributeNS(null, "y", y);
        elem.setAttributeNS(null, "stroke", "black");
        elem.setAttributeNS(null, "stroke-width", 0.1);
        this._domElement = elem;
      }
      else{
        this._domElement = {
          x: x,
          y: y,
          width: config.nodeSize,
          height: config.nodeSize,
          fillStyle: attrs.fillColor,
          strokeStyle: 'black'
        }
      }
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
    for(id in Store.data.Node){
      if(Store.data.Node[id]['id'] == this.pid){
        return Store.data.Node[id];
      }
    }
  }
}

export default Node;
