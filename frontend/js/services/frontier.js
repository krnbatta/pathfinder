import EventLogger from "./event-logger";

let FrontierService = {
  init(context){
    this.context = context;
  },

  get currentId(){
    return this.context.currentId;
  },

  /**
  * @function stepForward
  * This function checks if the node can be frontier. If so, it adds it changes it creates a new node with frontier color and node attributes and renders it on the screen. Additionally, it adds it to the current and history as well.
  * @param {Node} node
  */
  stepForward(){
    // this.currentId is the id or index of the step which is to be drawn right now
    // if this is close, all the currently generated or updated are to be added to 
    // open list which means that they are made blue in color.
    // Otherwise, it doesn't matter.
    let step = this.context.steps[this.currentId];
    let node = step.node;
    if(node.type == 'closing') {
      // now all the child nodes of its expanding counterpart are to be added to open list
      let expandingNode = node.sameExpandingNode;
      let childNodes = expandingNode.childNodes;
      childNodes.forEach((childNode) => {
        childNode.type = 'opened';
        childNode.nodeObjects.forEach((nodeObject) => {
          nodeObject.renderGraphics();
        });
        EventLogger.colorLog(childNode, 0.5);
      });
    }
  },

  stepBackward() {
    let step = this.context.steps[this.currentId-1];
    let node = step.node;
    if(node.type == 'closing') {
      // now all the child nodes of its expanding counterpart are to be added 
      // back to frontier list
      let expandingNode = node.sameExpandingNode;
      let childNodes = expandingNode.childNodes;
      childNodes.forEach((childNode) => {
        childNode.type = childNode.step.type;
        childNode.nodeObjects.forEach((nodeObject) => {
          nodeObject.renderGraphics();
        });
        EventLogger.colorLog(childNode, 0.5);
      });
    }
  },
}

export default FrontierService;
