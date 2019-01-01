import config from '../../config';

export default function(node, stage){
  let line = new PIXI.Graphics();
  line.lineStyle(1, config.lineColor);
  node.linePoints.forEach((point, index) => {
    if(index == 0){
      line.moveTo(point.x, point.y);
    }
    else{
      line.lineTo(point.x, point.y);
    }
  });
  stage.addChild(line);
  return line;
}
