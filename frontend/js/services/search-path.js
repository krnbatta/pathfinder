import GraphicsManager from '../services/graphics-manager';

let SearchPathService = {
  init(context){
    this.context = context;
  },

  get currentId(){
    return this.context.currentId;
  },

  getLine(id){
    let step = this.context.steps[id];
    if(step){
      let node = step.node;
      let line = node.searchPath;
      line.zIndex = 5;
      return line;
    }
  },

  /**
  * @function stepForward
  * This function removes the previous line drawn and adds the current line on the screen. Line is from source to the current node.
  * @param {Node} node
  */
  stepForward(){
    GraphicsManager.remove(this.context, this.getLine(this.currentId - 1));
    let line = this.getLine(this.currentId);
    GraphicsManager.insert(this.context, line, 5);
  },

  stepBackward(){
    let line = this.getLine(this.currentId-1);
    GraphicsManager.remove(this.context, line);
    if(this.currentId == 1) {
      return;
    }
    GraphicsManager.insert(this.context, this.getLine(this.currentId - 2), 5);
  },

  clean(){
    for(let i = 1; i<=this.currentId; i++){
      let line = this.getLine(i);
      GraphicsManager.remove(this.context, line);
    }
  },

  reset(){
    this.context.currentId = 0;
  }
}

export default SearchPathService;
