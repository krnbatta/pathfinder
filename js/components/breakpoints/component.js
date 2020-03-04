import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';
import Controller from '../../controller';
import TimeTravelService from '../../services/time-travel';

/**
* @module components/playback-controls
* This component handles the playback controls buttons.
*/
let BreakpointsComponent = new StateMachine($.extend({}, BaseComponent, {
  data: {
    bpApplied: false,
    bps: []
  },
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#pathfinder").append("<div id='breakpoints-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#breakpoints-component").html(template);
      this.bindEvents();
    },

    onReady(){
      this.addBreakpoint();
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
      htmlStr += `<div class='col-sm'><a class="remove-bp">Remove</a></div></div>`;
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
      let self = this;
      $('#save-bp').on('click', () => {
        self.setValues();
        $('#bp-btn').click();
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
      return ``;
      let message = ``;
      if(!node.gValid){
        message += `The g value of current node(${node.g}) being expanded is less than that of its parent(${node.parentNode.g}) <br>`;
      }
      if(!node.fValid){
        message += `The f value of current node(${node.f}) being expanded is more than that of its parent(${node.parentNode.f}) <br>`;
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
