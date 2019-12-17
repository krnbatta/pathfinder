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

    let variables = options.variables;

    delete options.variables;

    //assigning the options configuration to the node
    Object.assign(this, options);

    //setting up node nodeObjects
    this.setNodeObjects(variables);

    //incrementing the _id for next object
    _id++;
  }

  setNodeObjects(variables){
    this.nodeObjects = this.step.tracer.nodeStructure.map((obj) => {
      let nodeConf = JSON.parse(JSON.stringify(obj));
      delete nodeConf.variables;
      nodeConf.node = this;
      let coordinates = {};
      Object.keys(obj.variables).forEach((key) => {
        coordinates[key] = variables[obj.variables[key]];
      });
      let options = {nodeConf: nodeConf, coordinates: coordinates};
      switch (obj.type) {
        case "rectangle":
          return Store.createRecord('Rectangle', options)
        case "circle":
          return Store.createRecord('Circle', options)
        case "line":
          return Store.createRecord('Line', options)
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
    this._backgroundHighlight.visible = false;
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
      this.nodeObjects.forEach((nodeObject) => container.addChild(nodeObject.graphics));
      container.addChild(this.backgroundHighlight);
      this._graphics = container;
    }
    return this._graphics;
  }

  get lineNodeObjects(){
    return this.nodeObjects.filter((nodeObject) => (nodeObject.type == "line"));
  }

  get backgroundHighlight(){
    if(!this._backgroundHighlight){
      let polygonPoints = [];
      this.lineNodeObjects.forEach((line) => {
        let point = [line.x1, line.y1];
        let pointPresent = polygonPoints.some((pt) => (pt.x == point[0] && pt.y == point[1]));
        if(!pointPresent){
            polygonPoints.push(point);
        }
        point = [line.x2, line.y2];
        pointPresent = polygonPoints.some((pt) => (pt[0] == point[0] && pt[1] == point[1]));
        if(!pointPresent){
            polygonPoints.push(point);
        }
      });
      polygonPoints = polygonPoints.flat().map((pt) => pt*config.nodeSize);
      let polygon = new PIXI.Graphics();
      polygon.lineStyle(1, this.attrs.strokeStyle);
      polygon.beginFill(this.attrs.fillStyle);
      polygon.alpha = 0.5;
      polygon.drawPolygon(polygonPoints);
      polygon.endFill();
      this._backgroundHighlight = polygon;
    }
    return this._backgroundHighlight;
  }

  get maxX(){
    return Math.max.apply(Math, this.nodeObjects.map((nodeObject) => nodeObject.maxX));
  }

  get maxY(){
    return Math.max.apply(Math, this.nodeObjects.map((nodeObject) => nodeObject.maxY));
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
    let pNode = null;
    Object.values(Store.data.Node).forEach((node) => {
      if(node.id == this.pId){
        pNode = node;
        return;
      }
    });
    return pNode;
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
