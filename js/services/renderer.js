import $ from 'jquery';

/** @module services/renderer
* This service is responsible for rendering the canvas onto the DOM.
*/
export default {
  /**
  * @function render
  * This function creates a canvas element of height and width specified and appends it to div with class screen. Additionally, it also sets PIXI.Application as app on the context object, renderer and stage as well. It then sets rendered flag as true on the context object.
  */
  render(context, width, height) {
    context.canvas = document.createElement("canvas");
    context.canvas.id = "canvas";
    $(".screen").append(context.canvas);
    context.app = new PIXI.Application({
      width: width,
      height: height,
      view: context.canvas,
      transparent: true
    });
    context.renderer = context.app.renderer;
    context.stage = context.app.stage;
    context.renderer.render(context.stage);
    context.rendered = true;
  }
}
