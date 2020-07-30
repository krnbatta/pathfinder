import StateMachine from "javascript-state-machine";
import $ from "jquery";
import debounce from "../utils/debounce";
import DraggableService from "./draggable";
import ResizerService from "./resizer";

/** @module services/drag-resize-box
 * This service is responsible for showing state information for each node. It is in the form of draggable and resizeable.
 */
export default {
  init(svgWrapper) {
    this.svg = $(svgWrapper).find('svg')[0];
    if(this.view){
      this.view.parentNode.removeChild(this.view);
      this.view = null;
    }
    this.view = document.createElement('div');

    this.view.id = 'drag-resize-box';

    if(this.dimSet){
      this.view.style.width = this.width;
      this.view.style.height = this.height;
      this.view.style.top = this.top;
      this.view.style.left = this.left;
      this.svg.setAttributeNS(null, "width", this.svgWidth);
      this.svg.setAttributeNS(null, "height", this.svgHeight);
    }
    else{
      this.svgWidth = this.svg.width.baseVal.value;
      this.svgHeight = this.svg.height.baseVal.value;
      this.setDefaultAttrs();
    }

    $('body').append(this.view);

    this.view.appendChild(svgWrapper);

    $(this.view).isResizing = false;

    DraggableService.init($(this.view), this.updateDims.bind(this));
    ResizerService.init($(this.view), this.updateDims.bind(this));
  },

  setDefaultAttrs(){
    this.view.style.width = "120px";
    this.view.style.height = "120px";
    this.view.style.top = "0";
    this.view.style.left = "0";
    this.svg.setAttributeNS(null, "width", this.svgWidth);
    this.svg.setAttributeNS(null, "height", this.svgHeight);
  },

  updateDims(dims){
    Object.assign(this, dims);
    this.dimSet = true;
    if(dims.width){
      this.svg.setAttributeNS(null, "width", dims.width);
      this.svg.setAttributeNS(null, "height", dims.height);
    }
  },

  /**
   * @function hide
   * This lifecycle function hides the context menu
   */
  hide() {
    $("#drag-resize-box").hide();
  },

  /**
   * @function show
   * This lifecycle function shows the context menu
   */
  show() {
    $("#drag-resize-box").show();
  }
}
