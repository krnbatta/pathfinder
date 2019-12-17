import NodeObject from './node-object';
import config from '../config'

let _id = 1;

class Line extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    Object.assign(this, options.coordinates);
  }
  createGraphics(attrs){
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(2, attrs.fillStyle);
    _graphics.moveTo(this.x1*config.nodeSize, this.y1*config.nodeSize);
    _graphics.lineTo(this.x2*config.nodeSize, this.y2*config.nodeSize);
    _graphics.interactive=true;
    _graphics.buttonMode=true;
    _graphics.on("mouseover", (e) => {
      _graphics.tint=attrs.fillStyle;
    });
    _graphics.on("mouseout", () => {
      _graphics.tint="0xFFFFFF";
    });
    return _graphics;
  }
  get graphics(){
    if(!this._graphics){
      this._graphics = this.createGraphics(this.node.attrs);
    }
    return this._graphics;
  }
  get maxX(){
    return Math.max(this.x1, this.x2);
  }
  get maxY(){
    return Math.max(this.y1, this.y2);
  }
}

export default Line;
