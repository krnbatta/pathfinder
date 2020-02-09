import $ from 'jquery';
import Injector from './injector';
import config from '../config';

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
    let viewport;
    if(config.zooming){
      viewport = new Viewport.Viewport({
        screenWidth: width,
        screenHeight: height,
        worldWidth: width*2,
        worldHeight: height*2,
        interaction: context.app.renderer.plugins.interaction,
        stopPropagation: true
      });
      viewport.drag().pinch().wheel().decelerate().bounce()
              // .on("drag-end", function(){
              //   if(this.getVisibleBounds().x > 0 || this.getVisibleBounds().y > 0){
              //     this.ensureVisible(0,0);
              //   }
              // })
              // .on("zoomed", function(){
              //   if(this.lastViewport.scaleX < 1 || this.lastViewport.scaleY < 1){
              //     let self = this;
              //     this.ensureVisible(0,0);
              //     setTimeout(() => {
              //       self.fit(false, width, height);
              //     }, 100);
              //   }
              // });
    }
    else{
      viewport = new PIXI.Container();
    }
    context.renderer = context.app.renderer;
    context.stage = viewport;
    context.renderer.render(context.app.stage);
    context.app.stage.addChild(context.stage);
    context.rendered = true;
    Injector.register('renderer', context.renderer);
  }
}
