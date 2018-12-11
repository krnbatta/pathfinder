class Debugger {
  constructor(debugFile) {
    this.debugFile = debugFile;
    this._debugJson = null;
    this._steps = null;
  }

  get debugJson(){
    if(!this._debugJson){
      this._debugJson = $.getJSON(this.debugFile);
    }
    return this._debugJson;
  }

  //create step
  get steps() {
    if(!this._steps){
      this._steps = this.debugJson.then((json) => {
        let eventsList = json.eventList;
        eventsList.forEach((event) => {
          store.createRecord('step', event);
        });
        return store.data.step;
      }
    }
    return this._steps;
  }
}
