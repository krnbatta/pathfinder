import config from '../../config';
import svgDrawLine from './svg';
import canvasDrawLine from './canvas';
import webglDrawLine from './webgl';

export default function(node, stage){
  switch(config.renderType){
    case "svg":
      return svgDrawLine.call(this, steps);
      break;
    case "canvas":
      return canvasDrawLine.call(this, steps);
      break;
    case "webgl":
      return webglDrawLine.call(this, node, stage);
      break;
  }
}
