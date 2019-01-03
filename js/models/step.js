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
    let prevNodes = [];
    if(this.previousStep){
      prevNodes = this.previousStep.nodes;
    }
    prevNodes.push(this.node);
    return prevNodes;
  }

  get closedNodes(){
    return this.nodes.filter((node) => {
      return node.type == "closing";
    });
  }

  get openedNodes(){
    return this.nodes.filter(node => !this.closedNodes.includes(node)).filter(node => !this.frontierNodes.includes(node));
  }

  get frontierNodes(){
    if(this.isFrontier){
      let cIndex = this.nodes.indexOf(this.currentNode);
      return this.nodes.slice(cIndex+1);
    }
    return [];
  }

  get isFrontier(){
    return ["generating", "updating"].indexOf(this.type) != -1;
  }

  get currentNode() {
    return this.nodes.slice().reverse().find((node) => {
      return node.type == "expanding";
    });
  }

  get isFirstStep(){
    return this._id == 1;
  }

  get previousStep(){
    if(!this.isFirstStep){
      return Store.data.Step[this._id-1];
    }
    return null;
  }

  get htmlStr() {
    let tmp = document.createElement("div");
    let svg = document.createElementNS(config.xmlns, "svg");
    let tracer = Store.find("Tracer");
    svg.setAttributeNS(null, "width", config.nodeSize*tracer.maxX);
    svg.setAttributeNS(null, "height", config.nodeSize*tracer.maxY);
    this.nodes.forEach((node) => {
      svg.appendChild(node.domElement);
    })
    tmp.append(svg);
    let domString = tmp.innerHTML;
    return domString;
  }

  get text() {
    let node = this.node;
    if(this.type == "source" || this.type == "destination"){
      return `${this.type.toUpperCase()} Node(id: ${node.id}, x: ${node.x}, y: ${node.y}`;
    }
    else{
      return `${this.type.toUpperCase()} Node(id: ${node.id}, x: ${node.x}, y: ${node.y}, f: ${node.f}, g: ${node.g}, pId: ${node.pId})`;
    }
  }

}

export default Step;
