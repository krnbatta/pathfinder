import config from '../config';
import FloatboxService from '../services/floatbox';
import Controller from '../controller';

export default function(attrs, values){
  let rectangle = new PIXI.Graphics();
  rectangle.lineStyle(1, attrs.strokeStyle);
  rectangle.beginFill(attrs.fillStyle);
  rectangle.drawRect(attrs.x, attrs.y, attrs.width, attrs.height);
  rectangle.endFill();
  if(!attrs.isMap){
    rectangle.interactive=true;
    rectangle.buttonMode=true;
    rectangle.on("mouseover", (e) => {
      rectangle.tint=attrs.fillStyle;
      // let tilePosition = Controller.renderer.plugins.interaction.mouse.global;
      // let canvasPosition = Controller.canvasPosition;
      // let scroll = document.getElementById("pathfinder").scrollTop;
      let position  = {
        x: Controller.x,//tilePosition.x + canvasPosition.left,
        y: Controller.y//tilePosition.y + canvasPosition.top - scroll
      }
      FloatboxService.execute(e, values, position);
    });
    rectangle.on("mouseout", () => {
      rectangle.tint="0xFFFFFF";
    });
  }
  return rectangle;
};
