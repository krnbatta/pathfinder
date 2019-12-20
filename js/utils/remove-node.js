/**
 * @function removeNode
 * This function removes the Graphics object from the stage.
 * @param {Controller} context
 * @param {PIXI.Graphics} graphics
*/
export default function(context, graphics) {
  if(graphics){
    graphics.visible = false;
  }
  // context.stage.removeChild(graphics);
}
