import * as PIXI from 'pixi.js'
import config from "../config";
import GraphicsManager from './graphics-manager';

const rectTemplate = new PIXI.Graphics();
rectTemplate.lineStyle(1, 0x000000)
            .beginTextureFill()
            .drawRect(0, 0, config.nodeSize, config.nodeSize)
            .endFill();

const circleTemplate = new PIXI.Graphics();
circleTemplate.lineStyle(1, 0x000000)
              .beginTextureFill()
              .drawCircle(0, 0, 0.25 * config.nodeSize)
              .endFill();

export default {
  init(context) {
    // each key will be node Id. What about multiple natives in same node?
    // should be identified by node Id and position.
    // for rectange => x, y
    // for circle => x, y
    // The key would look like => nodeId-x-y
    // This assumes that each node would not have same primitive with same coordinates
    this.context = context;
    this.rects = {};
    this.circles = {};
  },

  getBase(nodeId, primitiveType) {
    //can add x and y in future if same shapes are present in one node
    // const key = `${nodeId}-${x}-${y}`;
    // using nodeId instead for now
    const geometry = (primitiveType=='circle' ? circleTemplate.geometry : rectTemplate.geometry);
    const dataStore = (primitiveType=='circle' ? this.circles : this.rects);
    if (!dataStore.hasOwnProperty(nodeId)) {
      let primitive = new PIXI.Graphics(geometry);
      primitive.buttonMode = true;
      primitive.interactive = true;
      dataStore[nodeId] = primitive;
      GraphicsManager.insert(this.context, primitive);
    }
    dataStore[nodeId].visible = true;
    return dataStore[nodeId];
  },

  getRect(nodeObj) {
    const nodeId = nodeObj.node.id;
    const attrs = nodeObj.node.attrs;
    const rect = this.getBase(nodeId, 'rect');
    rect.position.set(nodeObj.node.x * config.nodeSize, nodeObj.node.y * config.nodeSize);
    rect.tint = attrs.fillStyle;
    return rect;
  },

  getCircle(nodeObj) {
    const nodeId = nodeObj.node.id;
    const attrs = nodeObj.node.attrs;
    const circle = this.getBase(nodeId, 'circle');
    circle.position.set(nodeObj.node.cx * config.nodeSize, nodeObj.node.cy * config.nodeSize);
    circle.tint = attrs.fillStyle;
    return circle;
  }  
};
