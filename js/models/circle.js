import NodeObject from './node-object';
import config from '../config'

let _id = 1;

class Circle extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    Object.assign(this, options.coordinates);
    this.r = 0.25 * config.nodeSize;
  }
  createGraphics(attrs){
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(1, attrs.strokeStyle);
    _graphics.beginFill(attrs.fillStyle);
    _graphics.drawCircle(this.cx*config.nodeSize, this.cy*config.nodeSize, this.r);
    _graphics.endFill();
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
  get center(){
    return {x: config.nodeSize*(this.cx), y: config.nodeSize*(this.cy)}
  }
  get maxX(){
    return this.cx;
  }
  get maxY(){
    return this.cy;
  }
}

export default Circle;
