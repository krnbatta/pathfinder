import config from '../config';
import Controller from '../controller';
import insertNode from '../utils/insert-node';
import removeNode from '../utils/remove-node';
import drawLine from '../utils/draw-line';

let SearchPathService = {
  init(context){
    this.context = context;
    //history => history is history of lines drawn at each step.
    this.history = [];
    //current => The current is line PIXI.Graphics object which is basically a line drawn from current node to the source.
    this.current = null;
  },

  get currentId(){
    return this.context.currentId;
  },

  /**
  * @function update
  * This function removes the previous line drawn and adds the current line on the screen. Line is from source to the current node.
  * @param {Node} node
  */
  update(node){
    removeNode(this.context, this.history[this.currentId-1]);
    this.current = drawLine(this.context, node);
    this.history[this.currentId] = this.current;
  },

  retraceHistory(id){
    removeNode(this.context, this.current);
    this.current = this.history[id];
    insertNode(this.context, this.current);
  },

  clearFuture(){
    this.history.length = this.currentId;
  },

  clean(){
    removeNode(this.context, this.current);
  },

  stepBackward(){
    let line = this.history.pop();
    removeNode(this.context, line);
    insertNode(this.context, this.history[this.history.length-1])
  }
}

export default SearchPathService;
