import $ from 'jquery';
import Injector from './injector';

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
      transparent: true,
      forceCanvas: true,
      antialias: true
    });
    context.renderer = context.app.renderer;
    context.stage = new PIXI.Container();
    context.renderer.render(context.app.stage);
    context.app.stage.addChild(context.stage);
    context.rendered = true;
    Injector.register('renderer', context.renderer);
  }
}
