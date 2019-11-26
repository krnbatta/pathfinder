import config from '../config';

/**
 * @function drawLine
 * This function draws the line from the node passed to its source via its linePoints property
 * @param {Controller} context
 * @param {Node} node
 * @return {PIXI.Graphics}
*/
export default function(context, node){
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
  context.stage.addChild(line);
  return line;
}
