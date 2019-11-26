/**
 * @function insertNode
 * This function add the Graphics object to the stage and renders it.
 * @param {Controller} context
 * @param {PIXI.Graphics} rectangle
*/
export default function(context, rectangle) {
  context.stage.addChild(rectangle);
}
