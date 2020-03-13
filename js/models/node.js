import * as PIXI from 'pixi.js'

import Store from '../services/store'
import NodeObjectsProcessor from '../services/node-objects-processor'
import config from '../config'
import nodeColor from '../utils/node-color';
import nodeFactory from '../utils/node-factory';
import Injector from '../services/injector';

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
    let variables = options.variables;

    delete options.variables;

    Object.assign(this, options);

    variables = {variables: this.setVariables(variables)};


    Object.assign(this, variables);
    //setting up node nodeObjects
    this.setNodeObjects();

    //incrementing the _id for next object
    _id++;
  }

  setVariables(variables){
    return variables || this.generatingNode.variables;
  }

  get generatingNode(){
    return Store.where("Node", {type: "generating", id: this.id})[0];
  }

  setNodeObjects(){
    this.nodeObjects = NodeObjectsProcessor.process(this);
    return;

    this.step.tracer.nodeStructure.map((obj) => {
      let nodeConf = JSON.parse(JSON.stringify(obj));
      delete nodeConf.variables;
      nodeConf.node = this;
      let coordinates = {};
      Object.keys(obj.variables).forEach((key) => {
        if(key=="points"){
          coordinates['points'] = [];
          obj.variables['points'].forEach((pt) => {
            coordinates['points'].push(variables[pt]);
          });
        }
        else{
          coordinates[key] = variables[obj.variables[key]];
        }
      });
      let options = {nodeConf: nodeConf, coordinates: coordinates};
      switch (obj.type) {
        case "rectangle":
          return Store.createRecord('Rectangle', options);
        case "circle":
          return Store.createRecord('Circle', options);
        case "line":
          return Store.createRecord('Line', options);
        case "polygon":
          return Store.createRecord('Polygon', options);
      }
    });
  }

  get unPersistedObjects(){
    return this.nodeObjects.filter((nodeObject) => !nodeObject.persisted);
  }

  get persistedObjects(){
    return this.nodeObjects.filter((nodeObject) => nodeObject.persisted);
  }

  hideUnPersistedPart(){
    this.unPersistedObjects.forEach((nodeObject) => nodeObject.hide());
  }

  showUnPersistedPart(){
    this.unPersistedObjects.forEach((nodeObject) => nodeObject.show());
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

    return {
      fillStyle: nodeAttrs.fillColor,
      strokeStyle: config.borderColor,
      strokeWidth: config.borderWidth
    }
  }

  /**
  * graphics is PIXI.Graphics object that is a rectangle to drawn on canvas using nodeFactory.
  * @type {PIXI.Graphics}
  * @public
  */
  get graphics() {
    if (!this._graphics){
      let container = new PIXI.Container();
      this.nodeObjects.forEach((nodeObject) => {
        if(nodeObject.graphics){
          container.addChild(nodeObject.graphics)
        }
      });
      this._graphics = container;
    }
    return this._graphics;
  }

  get lineNodeObjects(){
    return this.nodeObjects.filter((nodeObject) => (nodeObject.type == "line"));
  }

  get maxX(){
    return Math.max.apply(Math, this.nodeObjects.map((nodeObject) => nodeObject.maxX));
  }

  get maxY(){
    return Math.max.apply(Math, this.nodeObjects.map((nodeObject) => nodeObject.maxY));
  }

  get minX(){
    return Math.min.apply(Math, this.nodeObjects.map((nodeObject) => nodeObject.minX));
  }

  get minY(){
    return Math.min.apply(Math, this.nodeObjects.map((nodeObject) => nodeObject.minY));
  }

  /**
  * step is corresponding step object for this node in the algorithm.
  * @type {Step}
  * public
  */
  // get step(){
  //   return Store.data.Step[this.stepId];
  // }

  /**
  * parentNode is parent node
  * @type {Node}
  * public
  */
  get parentNode(){
    if(!this.pId){
      return null;
    }
    for(let i=this._id-1; i>=0; i--){
      let node = Store.data.Node[i];
      if(node.id == this.pId){
        return node;
      }
    }
    return null;
  }

  get childNodes(){
    let nodes = [];
    if(this.type != "expanding"){
      return nodes;
    }
    for(let i=this._id-1; i>=0; i--){
      let node = Store.data.Node[i];
      if(!node || node._id == this._id){
        return nodes;
      }
      if(node.pId == this.id){
        nodes.push(node);
      }
    }
    return nodes;
  }

  get siblingNodes(){
    if(!this.parentNode){
      return [];
    }
    return this.parentNode.childNodes.filter((node) => {
      node.id!==this.id;
    });
  }

  get pathNodeObject(){
    return this.nodeObjects.find((nodeObject) => nodeObject.drawPath);
  }
  /**
  * center is ceter position of the current node.
  * @type {object}
  * @public
  */
  get center(){
    return this.pathNodeObject.center;
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

  get fValid(){
    if(this.type == "expanding" && this.parentNode){
      return (this.f >= this.parentNode.f ? true : false);
    }
    return true;
  }

  get gValid(){
    if(this.type == "expanding" && this.parentNode){
      return (this.g >= this.parentNode.g ? true : false);
    }
    return true;
  }

  /**
  * h value is calculated by adding f and g value
  * @type {number}
  * @public
  */
  get h() {
    return this.f - this.g;
  }

  get text() {
    if(!this._text){
      if(this.type == "source" || this.type == "destination"){
        this._text = `${this.type.toUpperCase()} Node(id: ${this.id}, x: ${this.variables.x}, y: ${this.variables.y})`;
      }
      else{
        this._text = `${this.type.toUpperCase()} Node(id: ${this.id}, x: ${this.variables.x}, y: ${this.variables.y}, f: ${this.f}, g: ${this.g}, h: ${this.h}, pId: ${this.pId})`;
      }
    }
    return this._text;
  }

  get x(){
    return this.variables.x;
  }

  get y(){
    return this.variables.y;
  }
}

export default Node;
