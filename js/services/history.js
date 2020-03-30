import config from '../config';
import Controller from '../controller';
import GraphicsManager from '../services/graphics-manager';
import * as PIXI from 'pixi.js'

let HistoryService = {
  init(context){
    this.context = context;
    //history => History is array of all the nodes at each step of the algorithm
    this.history = [];
    this.timeTravelStartId = null;
    this.timeTravelEndId = null;
  },

  get currentId(){
    return this.context.currentId;
  },

  get timeTravelling(){
    return this.context.timeTravelling;
  },

  /**
  * @function updateNodes
  * This function adds the node graphicsContainer as the current history node identified by the current id.
  */
  update(){
    if(this.timeTravelling){
      if(!this.timeTravelStartId){
        this.timeTravelStartId = this.currentId;
      }
    }
    else{
      //hide non persisted previous step node
      if(this.currentId > 1){
        let previousStep = this.context.steps[this.currentId - 1];
        previousStep.node.hideUnPersistedPart();
      }
      let graphicsContainer = this.getGraphicsContainer(this.currentId);
      GraphicsManager.insert(this.context, graphicsContainer);
    }
  },
//preallocate array based on jump value! to avoid lazy copying
  flush(){
    this.timeTravelEndId = this.currentId;
    let timeTravelContainer = new PIXI.Container();
    let nodeHash = {};
    for(let id = this.timeTravelEndId - 1; id>= this.timeTravelStartId; id--){
      let step = this.context.steps[id];
      let node = step.node;
      if(!nodeHash[node.id]){
        nodeHash[node.id] = this.getGraphicsContainer(id);
      }
    }
    for(let id in nodeHash){
      timeTravelContainer.addChild(nodeHash[id]);
    }
    GraphicsManager.insert(this.context, timeTravelContainer);
    let previousStep = this.context.steps[this.timeTravelEndId - 1];
    previousStep.node.hideUnPersistedPart();
    let graphicsContainer = this.getGraphicsContainer(this.timeTravelEndId);
    GraphicsManager.insert(this.context, graphicsContainer);
    this.timeTravelStartId = null;
    this.timeTravelEndId = null;
  },

  /**
  * @function updateId
  * This function increments the running currentId
  */
  updateId(){
    this.context.currentId += 1;
  },

  getGraphicsContainer(id){
    let step = this.context.steps[id];
    if(step){
      let node = step.node;
      let graphicsContainer = node.graphics;
      return graphicsContainer;
    }
  },

  retraceHistory(id){
    for(let i = 1; i<=id; i++){
      let graphicsContainer = this.getGraphicsContainer(i);
      GraphicsManager.insert(this.context, graphicsContainer);
    }
    this.context.currentId = id+1;
  },

  clearFuture(){
    // this.history.length = this.currentId;
  },

  clean(){
    for(let i = 1; i<=this.currentId; i++){
      let graphicsContainer = this.getGraphicsContainer(i);
      GraphicsManager.remove(this.context, graphicsContainer);
    }
  },

  reset(){
    this.context.currentId = 1;
    // this.history = [];
  },

  stepBackward(){
    let graphicsContainer = this.getGraphicsContainer(this.currentId + 1);
    GraphicsManager.remove(this.context, graphicsContainer);
  }
}

export default HistoryService;
