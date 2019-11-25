import Store from '../services/Store'
import config from '../config'
import nodeColor from '../utils/node-color';
import nodeFactory from '../utils/node-factory';

let _id = 1;

/** Class representing a node */
class Node {
  /**
  * Create a node
  * @param {object} options - configuration to define the node
  */
  constructor(options) {
    /**
    * _id is unique id of the node that is set to _id variable defined outside the class. _id is incremented upon creation of new node.
    * @type  {number}
    * @private
    */
    this._id = _id;
    /**
    * _linePoints is array of all the points from this node to the source node
    * @type {Array}
    * @private
    */
    this._linePoints = null;
    //assigning the options configuration to the node
    Object.assign(this, options);
    //incrementing the _id for next object
    _id++;
  }

  /**
  * attrs is  attributes of node contains its coordinates, size, color, border. These are used to draw the node
  * @type {object}
  * @public
  */
  get attrs() {
    //getting attributes of node based on its type
    let nodeAttrs = config.nodeAttrs[nodeColor[this.type]];
    //if current node is source, disregard if it is being opened/updated/closed. retain its color
    if(this.id==this.step.tracer.source.node.id){
      nodeAttrs=config.nodeAttrs['source'];
    }
    //if current node is destination, disregard if it is being opened/updated/closed. retain its color
    if(this.id==this.step.tracer.destination.node.id){
      nodeAttrs=config.nodeAttrs['destination'];
    }
    //set x position based on node size in the configuration and x value of the node specified in constructor
    let x = config.nodeSize*this.x;
    //set y position based on node size in the configuration and y value of the node specified in constructor
    let y = config.nodeSize*this.y;

    return {
      x: x,
      y: y,
      width: config.nodeSize,
      height: config.nodeSize,
      fillStyle: nodeAttrs.fillColor,
      strokeStyle: config.borderColor,
      strokeWidth: config.borderWidth
    }
  }

  /**
  * domElement is PIXI.Graphics object that is a rectangle to drawn on canvas using nodeFactory.
  * @type {PIXI.Graphics}
  * @public
  */
  get domElement() {
    let x, y;
    if (!this._domElement){
      this._domElement = nodeFactory(this.attrs, this.values);
    }
    return this._domElement;
  }

  /**
  * step is corresponding step object for this node in the algorithm.
  * @type {Step}
  * public
  */
  get step(){
    return Store.data.Step[this.stepId];
  }

  /**
  * parentNode is parent node
  * @type {Node}
  * public
  */
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

  /**
  * center is ceter position of the current node.
  * @type {object}
  * @public
  */
  get center(){
    return {x: config.nodeSize*(this.x+0.5), y: config.nodeSize*(this.y+0.5)};
  }

  /**
  * linePoints returns cache of array of points from this node to the source node.
  * @type {Array}
  * @public
  */
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

  /**
  * values is search specific values i.e. type, id, parent id, f, g and h values for that node.
  * @type {object}
  * @public
  */
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

  /**
  * h value is calculated by adding f and g value
  * @type {number}
  * @public
  */
  get h() {
    return this.f + this.g;
  }

}

export default Node;
