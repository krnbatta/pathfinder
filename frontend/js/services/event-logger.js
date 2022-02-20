import $ from 'jquery';
import {rgbaStrToArr} from '../utils/color-transform';
import { utils } from 'pixi.js';
import Store from './store';
import config from '../config';
import nodeColor from '../utils/node-color';
import LoggerOverlayComponent from '../components/body/bottom-body/side-panel/logger-overlay/component';
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
    if (!step) return;
    const node = step.node;
    // if(node.type == 'expanding') {
    //   this.unhighlightPrevGroup(node);
    // }
    this.unhighlightPrevNode(node);
    this.highlightNode(node);
    this.addLeftTree();
    LoggerOverlayComponent.setNode(step.node);
    this.scrollIntoView(node, false);
  },

  stepBackward() {
    const step = this.context.steps[this.currentId-1];
    const node = step.node;
    // if(node.type == 'expanding') {
    //   this.highlightPrevGroup(node);
    // }
    this.highlightPrevNode(node);
    this.unhighlightNode(node);
    this.hideLeftTree();
    LoggerOverlayComponent.setNode(step.node);
    this.scrollIntoView(node, true);
  },

  highlightPrevGroup(node) {
    if(!node) return;

    const prevNode = Store.findById('Node', node._id-1);
    if(!prevNode || prevNode.type != 'closing') return;

    this.highlightNode(prevNode);
    const expandingNode = prevNode.sameExpandingNode;
    if(!expandingNode) return;
    
    this.highlightNode(expandingNode);
    expandingNode.childNodes.forEach((childNode) => this.highlightNode(childNode));
  },

  unhighlightPrevGroup(node) {
    if(!node) return;

    const prevNode = Store.findById('Node', node._id-1);
    if(!prevNode || prevNode.type != 'closing') return;

    this.unhighlightNode(prevNode);
    const expandingNode = prevNode.sameExpandingNode;
    if(!expandingNode) return;

    this.unhighlightNode(expandingNode);
    expandingNode.childNodes.forEach((childNode) => this.unhighlightNode(childNode));
  },

  highlightNode(node) {
    if(!node) return;

    const el = $(`#event-${node._id}`);
    const background = el.css('background-color');
    const rgb = rgbaStrToArr(background);
    el.css({'background': `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`, 'font-weight': 'bold'});
  },

  unhighlightNode(node) {
    if(!node) return;

    const el = $(`#event-${node._id}`);
    const fillStyle = config.nodeAttrs[nodeColor[node.type]].fillColor;
    const rgb = hex2rgb(fillStyle).map((a) => a*255);
    el.css({'background': `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.5)`, 'font-weight': 'normal'});
  },

  highlightPrevNode(node) {
    if(!node) return;

    const prevNode = Store.findById('Node', node._id-1);
    this.highlightNode(prevNode);
  },

  unhighlightPrevNode(node) {
    if(!node) return;

    const prevNode = Store.findById('Node', node._id-1);
    this.unhighlightNode(prevNode);
  },

  colorLog(node, alpha=1) {
    const el = $(`#event-${node._id}`);
    const fillStyle = config.nodeAttrs[nodeColor[node.type]].fillColor;
    const rgb = hex2rgb(fillStyle).map((a) => a*255);
    el.css('background', `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`);
  },
  uncolorLog(node) {
    const el = $(`#event-${node._id}`);
    el.css('background', '');
  },
  scrollIntoView(node, atTop) {
    let li = document.getElementById(`event-${node._id}`);
    li.scrollIntoViewIfNeeded(atTop);
  },

  addLeftTree() {
    const step = this.context.steps[this.currentId];
    if(step.isTerminal) return;

    let li = document.getElementById(`event-${this.currentId}`);
    let eventActions = li.children[0];
    eventActions.classList.add(`${step.type}-event`);
    eventActions.classList.remove('debuggable');
  },
  hideLeftTree() {
    const step = this.context.steps[this.currentId-1];
    if(step.isTerminal) return;

    let li = document.getElementById(`event-${this.currentId-1}`);
    let eventActions = li.children[0];
    eventActions.classList.remove(`${step.type}-event`);
    eventActions.classList.add('debuggable');
  }
};