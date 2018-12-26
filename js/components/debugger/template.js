import config from '../../config';

let template = () => {
  let temp = `<input type = 'file' id='load-algo' />`;
  if(config.renderType == "svg"){
    temp += `<div id='tracer-canvas'></div>`;
  }
  else{
    temp += `<canvas id='tracer-canvas'></canvas>`;
  }
  return temp;
}

export default template;
