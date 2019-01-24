import $ from 'jquery';

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
//
// let runnerFactory = function(steps) {
//     let self = this;
//     let startTime = new Date();
//     let runner = (() => {
//         let id = self.currentId;
//         let rectangles = [];
//         if (id > self.totalSteps) {
//             let endTime = new Date();
//             alert(endTime - startTime);
//             return;
//         }
//         let step = steps[id];
//         let node = step.node;
//         let attrs = node.domElement;
//         let fillStyle = attrs.fillStyle;
//         if (step.type == 'source') {
//             self.source = node;
//         }
//         if (step.type == 'destination') {
//             self.destination = node;
//         }
//         if (step.type == 'generating' || step.type == 'updating') {
//             if (!(self.source && node.id == self.source.id) && !(self.destination && node.id == self.destination.id)) {
//                 self.frontierNodes.push(node);
//                 fillStyle = config.nodeAttrs.frontier.fillColor;
//             }
//         }
//         if (self.source && node.id == self.source.id) {
//             fillStyle = config.nodeAttrs.source.fillColor;
//         }
//         if (self.destination && node.id == self.destination.id) {
//             fillStyle = config.nodeAttrs.destination.fillColor;
//         }
//         if (step.type == 'closing') {
//             self.frontierNodes.forEach((fNode) => {
//                 let rectangle = fNode.domElement;
//                 rectangles.push(rectangle);
//             });
//             self.frontierNodes = [];
//         }
//         attrs.fillStyle = fillStyle;
//         let rectangle = nodeFactory(attrs);
//         rectangles.push(rectangle);
//         rectangles.forEach((rectangle) => {
//           insertNode(self, rectangle);
//         });
//         self.history[id] = rectangles;
//         self.stage.removeChild(self.lines[id-1]);
//         self.lines[id] = drawLine(node, self.stage);
//         self.currentId = id+1;
//     });
//     return runner;
// }
// export default runnerFactory;
