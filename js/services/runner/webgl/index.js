import config from '../../../config';
import drawLine from '../../../utils/webgl/draw-line';

let runnerFactory = function(steps) {
    let self = this;
    let startTime = new Date();
    let runner = (() => {
        let id = self.currentId;
        let rectangles = [];
        if (id > self.totalSteps) {
            let endTime = new Date();
            alert(endTime - startTime);
            return;
        }
        let step = steps[id];
        let node = step.node;
        let attrs = node.domElement;
        let fillStyle = attrs.fillStyle;
        if (step.type == 'source') {
            self.source = node;
        }
        if (step.type == 'destination') {
            self.destination = node;
        }
        if (step.type == 'generating' || step.type == 'updating') {
            if (!(self.source && node.id == self.source.id) && !(self.destination && node.id == self.destination.id)) {
                self.frontierNodes.push(node);
                fillStyle = config.nodeAttrs.frontier.fillColor;
            }
        }
        if (self.source && node.id == self.source.id) {
            fillStyle = config.nodeAttrs.source.fillColor;
        }
        if (self.destination && node.id == self.destination.id) {
            fillStyle = config.nodeAttrs.destination.fillColor;
        }
        if (step.type == 'closing') {
            self.frontierNodes.forEach((fNode) => {
                let fAttrs = fNode.domElement;
                let rectangle = new PIXI.Graphics();
                rectangle.lineStyle(1, fAttrs.strokeStyle);
                rectangle.beginFill(fAttrs.fillStyle);
                rectangle.drawRect(fAttrs.x, fAttrs.y, fAttrs.width, fAttrs.height);
                rectangle.endFill();
                rectangles.push(rectangle);
            });
            self.frontierNodes = [];
        }
        let rectangle = new PIXI.Graphics();
        rectangle.lineStyle(1, attrs.strokeStyle);
        rectangle.beginFill(fillStyle);
        rectangle.drawRect(attrs.x, attrs.y, attrs.width, attrs.height);
        rectangle.endFill();
        rectangles.push(rectangle);
        rectangles.forEach((rectangle) => {
          self.stage.addChild(rectangle);
        });
        self.history[id] = rectangles;
        self.stage.removeChild(self.lines[id-1]);
        self.lines[id] = drawLine(node, self.stage);
        self.currentId = id+1;
    });
    return runner;
}
export default runnerFactory;
