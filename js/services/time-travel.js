import GraphicsManager from './graphics-manager';

export default {
  goBackwards(context, backVal){
    context.timeTravelling = true;
    let currentId = context.currentId;
    let proposedId = currentId - parseInt(backVal);
    proposedId = Math.max(proposedId, 1);
    while(context.currentId!=proposedId+1){
      context.stepBackward();
    }
    context.timeTravelling = false;
    context.stepBackward();
  },

  goForwards(context, frontVal){
    context.timeTravelling = true;
    let currentId = context.currentId;
    let proposedId = currentId + parseInt(frontVal);
    proposedId = Math.min(proposedId, context.totalSteps);
    while(context.currentId!=proposedId-1){
      context.stepForward();
    }
    context.timeTravelling = false;
    GraphicsManager.flushBuffer(context);
    context.stepForward();
  }
}
