export default function(steps) {
  let startTime = new Date();
  let svgNode = this.tracer.svgNode;
  $('#tracer-canvas').append(svgNode);
  let runner = ((id) => {
    if(id >= Object.keys(steps).length){
      let endTime = new Date();
      alert(endTime - startTime);
      return;
    }
    svgNode.append(steps[id].node.domElement);
    window.requestAnimationFrame(runner.bind(this, ++id));
  });
  window.requestAnimationFrame(runner.bind(this, 1));
}
