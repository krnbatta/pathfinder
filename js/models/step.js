import Store from '../services/Store';
import config from '../config'

var _id = 1;
class Step {
  constructor(options) {
    this._id = _id;
    this.type = options.type;
    options['stepId'] = _id;
    this.node = Store.createRecord('Node', options);
    _id++;
  }

  get nodes(){
    if(!this._nodes){
      let prevNodes = [];
      if(this.previousStep){
        prevNodes = this.previousStep.nodes;
      }
      prevNodes.push(this.node);
      this._nodes = prevNodes;
    }
    return this._nodes;
  }

  get closedNodes(){
    if(!this._closedNodes){
      this._closedNodes = this.nodes.filter((node) => {
        return node.type == "closing";
      });
    }
    return this._closedNodes;
  }

  get openedNodes(){
    if(!this._openedNodes){
      this._openedNodes = this.nodes.filter(node => !this.closedNodes.includes(node)).filter(node => !this.frontierNodes.includes(node));
    }
    return this._openedNodes;
  }

  get frontierNodes(){
    if(!this._frontierNodes){
      if(this.isFrontier){
        let cIndex = this.nodes.indexOf(this.currentNode);
        this._frontierNodes = this.nodes.slice(cIndex+1);
      }
      this._frontierNodes = [];
    }
    return this._frontierNodes;
  }

  get isFrontier(){
    return ["generating", "updating"].indexOf(this.type) != -1;
  }

  get currentNode() {
    if(!this._currentNode){
      this._currentNode = this.nodes.slice().reverse().find((node) => {
        return node.type == "expanding";
      });
    }
    return this._currentNode;
  }

  get isSource() {
    return this.type=="source";
  }

  get isDestination() {
    return this.type=="destination";
  }

  get isFirstStep(){
    return this._id == 1;
  }

  get previousStep(){
    if(!this._previousStep){
      if(!this.isFirstStep){
        this._previousStep = Store.data.Step[this._id-1];
      }
      this._previousStep = null;
    }
    return this._previousStep;
  }

  get changeColor(){
    return this.isFrontier && !this.isSource && !this.isDestination;
  }

  get text() {
    if(!this._text){
      let node = this.node;
      if(this.type == "source" || this.type == "destination"){
        this._text = `${this.type.toUpperCase()} Node(id: ${node.id}, x: ${node.x}, y: ${node.y})`;
      }
      else{
        this._text = `${this.type.toUpperCase()} Node(id: ${node.id}, x: ${node.x}, y: ${node.y}, f: ${node.f}, g: ${node.g}, h: ${node.h}, pId: ${node.pId})`;
      }
    }
    return this._text;
  }

}

export default Step;
