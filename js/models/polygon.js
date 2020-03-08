import NodeObject from './node-object';
import config from '../config'
import Injector from '../services/injector';
import FloatboxService from '../services/floatbox';

let _id = 1;

class Polygon extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    Object.assign(this, options.coordinates);
  }
  createGraphics(attrs){
    let self = this;
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(1, attrs.fillStyle);
    _graphics.beginFill(attrs.fillStyle);
    _graphics.drawPolygon(this.points.map((pt) => pt*config.nodeSize));
    _graphics.endFill();
    _graphics.alpha = 0.5;
    _graphics.interactive=true;
    _graphics.buttonMode=true;
    Injector.inject(this, ['controller', 'renderer']);
    _graphics.on("mouseover", (e) => {
      _graphics.tint=attrs.fillStyle;
      let position  = {
        x: self.controller.x,
        y: self.controller.y
      }
      FloatboxService.execute(e, self.node.values, position);
    });
    _graphics.on("mouseout", () => {
      _graphics.tint="0xFFFFFF";
    });

    let texture = this.renderer.generateTexture(_graphics);
    let polygonSprite = new PIXI.Sprite(texture);
    polygonSprite = _graphics;
    return polygonSprite;
  }
  get graphics(){
    if(!this._graphics){
      this._graphics = this.createGraphics(this.node.attrs);
    }
    // return null;
    return this._graphics;
  }
  get maxX(){
    let xcoords = this.points.filter((a,i)=>i%2===0);
    return Math.max(...xcoords);
  }
  get maxY(){
    let ycoords = this.points.filter((a,i)=>i%2===1);
    return Math.max(...ycoords);
  }
  get minX(){
    let xcoords = this.points.filter((a,i)=>i%2===0);
    return Math.min(...xcoords);
  }
  get minY(){
    let ycoords = this.points.filter((a,i)=>i%2===1);
    return Math.min(...ycoords);
  }
}

export default Polygon;
