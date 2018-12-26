import Store from '../services/Store';
import tracerParser from '../utils/tracer-parser';
import $ from 'jquery';

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
          Store.createRecord('Step', event);
        });
        return Store.data.Step;
      });
      return this._steps;
    }
  }
}

export default Tracer;
