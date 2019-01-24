import config from '../config';
import FloatboxService from '../services/floatbox';

export default function(attrs, values){
  if(config.renderType=="svg"){
    let elem = document.createElementNS(config.xmlns, "rect");
    $(elem).attr({
      'width': attrs.width,
      'height': attrs.height,
      'fill': attrs.fillStyle,
      'x': attrs.x,
      'y': attrs.y,
      'stroke': attrs.strokeStyle,
      'stroke-width': attrs.strokeWidth
    });
    return elem;
  }
  else{
    let rectangle = new PIXI.Graphics();
    rectangle.lineStyle(1, attrs.strokeStyle);
    rectangle.beginFill(attrs.fillStyle);
    rectangle.drawRect(attrs.x, attrs.y, attrs.width, attrs.height);
    rectangle.endFill();
    rectangle.interactive=true;
    rectangle.buttonMode=true;
    rectangle.on("mouseover", (e) => {
      rectangle.tint=attrs.fillStyle;
      FloatboxService.execute(e, values);
    });
    rectangle.on("mouseout", () => {
      rectangle.tint="0xFFFFFF";
    });
    return rectangle;
  }
};
