import config from '../../config';

let template = () => {
  let temp = `<input type='file' id='load-map' />`;
  if(config.renderType == "svg"){
    temp += `<div id='map-canvas'></div>`;
  }
  else{
    temp += `<canvas id='map-canvas'></canvas>`;
  }
  return temp;
}

export default template;
