import config from '../../config';
import svgRunner from './svg';
import canvasRunner from './canvas';
import webglRunner from './webgl';

export default function(steps){
  switch(config.renderType){
    case "svg":
      return svgRunner.bind(this, steps);
      break;
    case "canvas":
    //   return canvasRunner.bind(this, steps);
    //   break;
    // case "webgl":
      return webglRunner.bind(this, steps);
      break;
  }
}
