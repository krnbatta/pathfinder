import config from '../config';

export default function(context, rectangle){
  if(config.renderType=="svg"){
    context.tracer.svgNode.append(rectangle)
  }
  else{
    context.stage.addChild(rectangle);
  }
}
