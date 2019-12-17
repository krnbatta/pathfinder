/**
 * @function insertNode
 * This function add the Graphics object to the stage and renders it.
 * @param {Controller} context
 * @param {PIXI.Graphics} graphics
*/
export default function(context, graphics) {
  context.stage.addChild(graphics);
}
