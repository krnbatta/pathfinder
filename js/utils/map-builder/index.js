import config from '../../config';
import svgMapBuilder from './svg';
import canvasMapBuilder from './canvas';
import webglMapBuilder from './webgl';

export default function(mapData, callback){
  switch(config.renderType){
    case "svg":
      return svgMapBuilder.call(this, mapData, callback);
      break;
    case "canvas":
      return canvasMapBuilder.call(this, mapData, callback);
      break;
    case "webgl":
      return webglMapBuilder.call(this, mapData, callback);
      break;
  }
}
