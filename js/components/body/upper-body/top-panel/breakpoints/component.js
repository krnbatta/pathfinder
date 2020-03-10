import StateMachine from "javascript-state-machine";

import template from './template'

import $ from 'jquery';
import MicroModal from 'micromodal';

import BaseComponent from '../../../../base-component';
import Controller from '../../../../../controller';
import TimeTravelService from '../../../../../services/time-travel';

/**
* @module components/playback-controls
* This component handles the playback controls buttons.
*/
let BreakpointsComponent = new StateMachine($.extend({}, BaseComponent, {
  data: {
    bpApplied: false,
    bps: [],
    shown: false
  },
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#top-panel").append("<div id='breakpoints'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#breakpoints").html(template);
      this.hide();
      this.bindEvents();
    },

    onReady(){
      this.addBreakpoint();
    },

    hide(){
      this.shown = false;
      $("#breakpoints").hide();
    },

    show(){
      if(!this.shown){
        this.shown = true;
        $("#breakpoints").show();
      }
    },

    addBreakpoint(){
      let htmlStr = `<div class='row'><div class='bp col-sm'><select class='bp-opd'>`;
      const operands = ['id', 'x', 'y', 'f', 'g', 'h'];
      const operators = ['less than', 'equal to', 'greater than'];
      operands.forEach((operand) => {
        htmlStr += `<option>${operand}</option>`;
      });
      htmlStr += `</select></div>`;
      htmlStr += `<div class='col-sm'><select class='bp-opr'>`;
      operators.forEach((operator) => {
        htmlStr += `<option>${operator}</option>`;
      });
      htmlStr += `</select></div>`;
      htmlStr += `<div class='col-sm'><input class='bp-val' type='number'></div>`;
      htmlStr += `<div class='col-sm'><a class="remove-bp modal__btn modal__btn-warning">Remove</a></div></div>`;
      $('#bps').append(htmlStr);
      $(".remove-bp").on('click', (e) => {
        $(e.target).closest('.row').remove();
      });
    },

    /**
    * @function bindEvents
    * This function calls the PlaybackService callbacks as per the button clicked
    */
    bindEvents() {
      MicroModal.init();
      let self = this;
      $('#save-bp').on('click', () => {
        self.setValues();
        MicroModal.close('bp-modal');
      });
      $('#remove-bp').on('click', () => {
        self.clearValues();
      });
      $('#add-bp a').on('click', () => {
        self.addBreakpoint();
      });
    },

    setValues(){
      let bps = [];
      const totalBps = $('#bps .bp').length;
      let bpOpds = $('.bp-opd');
      let bpOprs = $('.bp-opr');
      let bpVals = $('.bp-val');
      for(let i=0; i<totalBps; i++){
        let operand = bpOpds[i].value;
        let operator = bpOprs[i].value;
        let val = bpVals[i].value;
        if(val){
          bps.push({
            operand, operator, val
          });
        }
      }
      this.bps = bps;
      if(this.bps.length){
        this.bpApplied = true;
      }
    },

    clearValues(){
      $('#bps .row').html('');
      this.addBreakpoint();
    },

    manualCheck(node){
      let valid = true;
      let message = ``;
      if(this.bpApplied){
        for(let i=0; i<this.bps.length; i++){
          let bp = this.bps[i];
          let compareVal = node[bp.operand];
          switch (bp.operator) {
            case "less than":
              valid = compareVal < parseInt(bp.val) ? false : true;
              break;
            case "equal to":
              valid = compareVal == parseInt(bp.val) ? false : true;
              break;
            case "greater than":
              valid = compareVal > parseInt(bp.val) ? false : true;
              break;
          }
          if(!valid){
            message += `The value of ${bp.operand} for the current node is ${compareVal} which is ${bp.operator} the breakpoint value i.e. ${bp.val} <br>`;
          }
        }
      }
      return message;
    },

    automaticCheck(node){
      let message = ``;
      if(!node.gValid){
        message += `The g value of current node(${node.g}) being expanded is less than that of its parent(${node.parentNode.g}). This indicates that a negative cost cycle might exist in the graph and is certainly an error. <br>`;
      }
      if(!node.fValid){
        message += `The f value of current node(${node.f}) being expanded is less than that of its parent(${node.parentNode.f}). This indicates an inadmissible heuristic function and might be an error. <br>`;
      }
      return message;
    },

    check(step){
      let node = step.node;
      return this.manualCheck(node) + this.automaticCheck(node);
    }
  }
}));

export default BreakpointsComponent;
