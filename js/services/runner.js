import config from '../config';
import drawLine from '../utils/draw-line';
import nodeFactory from '../utils/node-factory';
import insertNode from '../utils/insert-node';

//history
//clear the canvas
//trace all the nodes till now
//create the frontier nodes as per the array of frontier nodes.

let addFrontierNode = (controller, node) => {
  let id = controller.currentId;
  if (node.step.changeColor) {
    let attrs = node.attrs;
    attrs['fillStyle'] = config.nodeAttrs['frontier'].fillColor;
    let rectangle = nodeFactory(attrs, node.values);
    insertNode(controller, rectangle);
    controller.frontierRects.push(rectangle);
  }
  controller.frontierHistory[id] = controller.frontierRects.slice();
}

let clearFrontierNodes = (controller) => {
  let id = controller.currentId;
  controller.frontierRects.forEach((rect) => {
    controller.stage.removeChild(rect);
  });
  controller.frontierRects = [];
  controller.frontierHistory[id] = [];
}

//put rectangles that are extra - this includes. removing the frontier nodes as well - only when closing
//when generating/updating - first opened node and then frontier node
let updateHistory = (controller, rectangle) => {
  let id = controller.currentId;
  controller.history[id] = rectangle;
}

let updateLine = (controller, node) => {
  let id = controller.currentId;
  controller.stage.removeChild(controller.lines[id-1]);
  controller.line = drawLine(node, controller.stage);
  controller.lines[id] = controller.line;
}

let updateId = (controller) => {
  let id = controller.currentId;
  controller.currentId = id+1;
}

//source, destination, expanding, frontier, opened, closed
//source and destination remain untouched
//expanding is current - its color is coming directly.
//frontier - all generating/updating nodes that come between 2 expanding
//opened - all the nodes that are not closed or expanded
//closed - the one that is closed

//source, destination, expanding, closed, opened are mentioned. Only frontier is tricky
let runnerFactory = function(steps) {
    let self = this;
    let startTime = new Date();
    let runner = (() => {
        let id = self.currentId;
        if (id > self.totalSteps) {
            let endTime = new Date();
            alert(endTime - startTime);
            return;
        }
        let step = steps[id];
        let node = step.node;
        let rectangle = node.domElement;
        insertNode(controller, rectangle);
        addFrontierNode(self, node);
        if (step.type == 'closing') {
          clearFrontierNodes(self);
        }
        //update history
        updateHistory(self, rectangle);
        //update line
        updateLine(self, node);
        //update id
        updateId(self);
    });
    return runner;
}
export default runnerFactory;
