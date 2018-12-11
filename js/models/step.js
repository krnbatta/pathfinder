let _id = 1;
class Step {
  constructor(options) {
    this._id = _id;
    this.type = options.type;
    options['stepId'] = _id;
    this.node = store.createRecord('node', options);
    _id++;
  }

  get nodes(){
    let prevNodes = [];
    if(this.previosStep){
      prevNodes = this.previosStep.nodes;
    }
    return prevNodes.push(this.node);
  }

  get isFirstStep(){
    return this._id == 1;
  }

  get previosStep(){
    if(!this.isFirstStep){
      return store.data.step[_id-1];
    }
    return null;
  }

}
