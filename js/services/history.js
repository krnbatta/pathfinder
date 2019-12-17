import config from '../config';
import Controller from '../controller';
import insertNode from '../utils/insert-node';
import removeNode from '../utils/remove-node';

let HistoryService = {
  init(context){
    this.context = context;
    //history => History is array of all the nodes at each step of the algorithm
    this.history = [];
  },

  get currentId(){
    return this.context.currentId;
  },

  /**
  * @function updateNodes
  * This function adds the node graphicsContainer as the current history node identified by the current id.
  */
  update(){
    //hide non persisted previous step node
    if(this.currentId > 1){
      let previousStep = this.context.steps[this.currentId - 1];
      previousStep.node.hideUnPersistedPart();
    }
    let step = this.context.steps[this.currentId];
    let node = step.node;
    let graphicsContainer = node.graphics;
    insertNode(this.context, graphicsContainer);
    this.history[this.currentId] = node.graphics;
    return step;
  },

  /**
  * @function updateId
  * This function increments the running currentId
  */
  updateId(){
    this.context.currentId += 1;
  },

  retraceHistory(id){
    for(let i = 1; i<=id; i++){
      let graphicsContainer = this.history[i];
      insertNode(this.context, graphicsContainer);
    }
    this.context.currentId = id+1;
  },

  clearFuture(){
    this.history.length = this.currentId;
  },

  clean(){
    for(let i = 1; i<=this.currentId; i++){
      let graphicsContainer = this.history[i];
      removeNode(this.context, graphicsContainer);
    }
  },

  reset(){
    this.context.currentId = 1;
    this.history = [];
  },

  stepBackward(){
    let graphicsContainer = this.history.pop();
    removeNode(this.context, graphicsContainer);
  }
}

export default HistoryService;
