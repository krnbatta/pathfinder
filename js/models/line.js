import NodeObject from './node-object';
import config from '../config'
import Injector from '../services/injector';

let _id = 1;

class Line extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    Object.assign(this, options.coordinates);
  }
  createGraphics(attrs){
    if(config.mapType=='roadnetwork'){
      return null;
    }
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(1, attrs.fillStyle);
    _graphics.beginFill(attrs.fillStyle);
    // _graphics.drawPolygon(this.x1*config.nodeSize, this.y1*config.nodeSize, this.x2*config.nodeSize, this.y2*config.nodeSize);
    _graphics.moveTo(this.x1*config.nodeSize, this.y1*config.nodeSize);
    _graphics.lineTo(this.x2*config.nodeSize, this.y2*config.nodeSize);
    _graphics.endFill();
    _graphics.hitArea = new PIXI.Polygon([
      this.x1*config.nodeSize, this.y1*config.nodeSize - 1,
      this.x1*config.nodeSize, this.y1*config.nodeSize + 1,
      this.x2*config.nodeSize, this.y2*config.nodeSize - 1,
      this.x2*config.nodeSize, this.y2*config.nodeSize + 1
    ]);
    _graphics.interactive=true;
    _graphics.buttonMode=true;
    _graphics.on("mouseover", (e) => {
      _graphics.tint=attrs.fillStyle;
    });
    _graphics.on("mouseout", () => {
      _graphics.tint="0xFFFFFF";
    });
    Injector.inject(this, ['renderer']);
    // let texture = this.renderer.generateTexture(_graphics);
    // let lineSprite = new PIXI.Sprite(texture);
    return _graphics;
  }
  get graphics(){
    if(!this._graphics){
      this._graphics = this.createGraphics(this.node.attrs);
    }
    // return null;
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
