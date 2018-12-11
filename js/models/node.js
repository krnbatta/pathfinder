import store from './services/store'
import {nodeSize, fillColor} from './config'

let xmlns = "http://www.w3.org/2000/svg";
let _id = 1;
class Node {
  constructor(options) {
    this._id = _id;
    Object.assign(this, options);
  }

  get domElement() {
    if (!this._domElement){
      let elem = document.createElementNS(xmlns, "rect");
      let attrs = nodeAttrs[type];
      elem.setAttributeNS(null, "x", this.x);
      elem.setAttributeNS(null, "y", this.y);
      elem.setAttributeNS(null, "width", nodeSize);
      elem.setAttributeNS(null, "height", nodeSize);
      elem.setAttributeNS(null, "fill", attrs.fillColor);
      this._domElement = elem;
    }
    return this._domElement;
  }

  get step(){
    return store.data.step[this.stepId];
  }

  get parentNode(){
    return store.data.node[this.pId];
  }
}
