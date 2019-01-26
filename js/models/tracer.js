import Store from '../services/Store';
import config from '../config';
import tracerParser from '../utils/tracer-parser';
import $ from 'jquery';
import environment from '../environment';

class Tracer {
  constructor(debugFile) {
    this._id = 0;
    this.debugFile = debugFile;
    this._debugJson = null;
    this._steps = null;
    this.maxX = -1;
    this.maxY = -1;
  }

  get debugJson(){
    if(!this._debugJson){
      let that = this;
      this._debugJson = new Promise((resolve, reject) => {
        try{
          tracerParser(that.debugFile, resolve);
        }
        catch(e){
          reject(e);
        }
      });
    }
    return this._debugJson;
  }

  //create step
  get steps() {
    if(!this._steps){
      this._steps = this.debugJson.then((json) => {
        let eventsList = json.eventList;
        eventsList.forEach((event) => {
          if(event.x > this.maxX){
            this.maxX = event.x;
          }
          if(event.y > this.maxY){
            this.maxY = event.y;
          }
          let step = Store.createRecord('Step', event);
          step.tracer = this;
          if(event.type=="source"){
            this.source = step;
          }
          if(event.type=="destination"){
            this.destination = step;
          }
        });
        return Store.data.Step;
      });
      return this._steps;
    }
  }
  get svgNode() {
    let svg = document.createElementNS(config.xmlns, "svg");
    svg.setAttributeNS(null, "width", config.nodeSize*this.maxX);
    svg.setAttributeNS(null, "height", config.nodeSize*this.maxY);
    return svg;
  }

  get canvas(){
    if(!this._canvas){
      let canvas = document.getElementById('tracer-canvas');
      if(environment.mapUploaded){
        canvas.height = environment.mapHeight;
        canvas.width = environment.mapWidth;
      }
      else{
        canvas.height = this.maxY*config.nodeSize;
        canvas.width = this.maxX*config.nodeSize;
      }
      this._canvas = canvas;
    }
    return this._canvas;
  }

  setDimensions(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  get width() {
    return this.maxX * config.nodeSize
  }

  get height() {
    return this.maxY * config.nodeSize
  }

}

export default Tracer;
