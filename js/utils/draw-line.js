import * as PIXI from 'pixi.js'

import config from '../config';

/**
 * @function drawLine
 * This function draws the line from the node passed to its source via its linePoints property
 * @param {Controller} context
 * @param {Node} node
 * @return {PIXI.Graphics}
*/
// let element = document.getElementsByClassName('screen')[0];
// let done = false;
export default function(context, node, color){
  // if(!element){
  //   element = document.getElementsByClassName('screen')[0]
  // }
  let line = new PIXI.Graphics();
  let lineColor = color ? color : config.lineColor;
  line.lineStyle(1.5, lineColor);
  node.linePoints.forEach((point, index) => {
    if(index == 0){
      line.moveTo(point.x, point.y);
      // if(!done){
      //   element.scroll(point.x - 200, point.y - 200);
      //   done = true;
      // }
    }
    else{
      line.lineTo(point.x, point.y);
    }
  });
  context.stage.addChild(line);
  return line;
}
