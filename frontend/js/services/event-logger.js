import $ from 'jquery';
import {rgbaStrToArr} from '../utils/color-transform';
import { utils } from 'pixi.js';
import Store from './store';
import config from '../config';
import nodeColor from '../utils/node-color';
const { hex2string, hex2rgb } = utils;

export default {
  init(context) {
    this.context = context;
  },

  get currentId(){
    return this.context.currentId;
  },

  // only for highlighting i.e. bold and alpha
  // rest coloring is done by colorLog and uncolorLog
  stepForward() {
    const step = this.context.steps[this.currentId];
    const node = step.node;
    if(node.type == 'expanding') {
      this.unhighlightPrevGroup(node);
    }
    this.highlightNode(node);
  },

  stepBackward() {
    const step = this.context.steps[this.currentId-1];
    const node = step.node;
    if(node.type == 'expanding') {
      this.highlightPrevGroup(node);
    }
    this.unhighlightNode(node);
  },

  highlightPrevGroup(node) {
    const prevNode = Store.findById('Node', node._id-1);
    if(prevNode.type != 'closing'){
      return;
    }
    this.highlightNode(prevNode);
    const expandingNode = prevNode.sameExpandingNode;
    if(expandingNode){
      this.highlightNode(expandingNode);
      expandingNode.childNodes.forEach((childNode) => this.highlightNode(childNode));
    }
  },

  unhighlightPrevGroup(node) {
    const prevNode = Store.findById('Node', node._id-1);
    if(prevNode.type != 'closing'){
      return;
    }
    this.unhighlightNode(prevNode);
    const expandingNode = prevNode.sameExpandingNode;
    if(expandingNode){
      this.unhighlightNode(expandingNode);
      expandingNode.childNodes.forEach((childNode) => this.unhighlightNode(childNode));
    }
  },

  highlightNode(node) {
    const el = $(`#event-${node._id}`);
    const background = el.css('background-color');
    const rgb = rgbaStrToArr(background);
    el.css({'background': `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`, 'font-weight': 'bold'});
  },

  unhighlightNode(node) {
    const el = $(`#event-${node._id}`);
    const fillStyle = config.nodeAttrs[nodeColor[node.type]].fillColor;
    const rgb = hex2rgb(fillStyle).map((a) => a*255);
    el.css({'background': `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.5)`, 'font-weight': 'normal'});
  },

  colorLog(node) {
    const el = $(`#event-${node._id}`);
    const fillStyle = config.nodeAttrs[nodeColor[node.type]].fillColor;
    const background = hex2string(fillStyle);
    el.css('background', background);
  },
  uncolorLog(node) {
    const el = $(`#event-${node._id}`);
    el.css('background', '');
  }
};