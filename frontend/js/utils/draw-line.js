import * as PIXI from 'pixi.js'

import config from '../config';

/**
 * @function drawLine
 * This function draws the line from the node passed to its source via its linePoints property
 * @param {Controller} context
 * @param {Node} node
 * @return {PIXI.Graphics}
*/
export default function(context, node, color){
  let line = new PIXI.Graphics();
  let lineColor = color ? color : config.lineColor;
  line.lineStyle(1, lineColor);
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
