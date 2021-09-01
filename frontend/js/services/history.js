import NodeStateService from '../services/node-state';
import Store from '../services/store';
import EventLogger from '../services/event-logger';

let HistoryService = {
  init(context){
    this.context = context;
  },

  get currentId(){
    return this.context.currentId;
  },

  updateId(){
    this.context.currentId += 1;
  },

  getTracer(){
    return Store.find("Tracer");
  },

  getNode(id){
    if(!id){
      id = this.currentId;
    }
    let step = this.context.steps[id];
    if(step){
      return step.node;
    }
  },

  stepForward(){
    //hide non persisted previous step node
    if(this.currentId > 0){
      let previousStep = this.context.steps[this.currentId - 1];
      previousStep.node.hideUnPersistedPart();
    }
    let node = this.getNode(this.currentId);
    node.renderGraphics();
    EventLogger.colorLog(node);
    this.drawState();
  },

  stepBackward(){
    if(this.currentId == 0) {
      return;
    }
    let node = this.getNode(this.currentId-1);
    let samePrevNode = node.samePrevNode;
    if(samePrevNode){
      samePrevNode.renderGraphics();
    } else {
      node.hideGraphics();
    }
    EventLogger.uncolorLog(node);
    this.drawState(this.currentId-2);
  },


  reset(){
    this.context.currentId = 0;
  },

  clean() {
    for(let i = 0; i <= this.currentId; i++) {
      let node = this.getNode(i);
      node.hideGraphics();
    }
  },

  // Draw State if each node represents a state.
  drawState(id){
    let tracer = this.getTracer();
    let node = this.getNode(id);
    if(tracer.stateStructure && node){
      NodeStateService.process(node.state_variables);
    }
  }
}

export default HistoryService;
