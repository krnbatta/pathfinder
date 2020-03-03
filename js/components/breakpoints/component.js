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
    currentOperand: null,
    currentOperator: null,
    currentVal: null
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
      let htmlStr = `<div class='col-sm'><select id='bp-opd'>`;
      const operands = ['id', 'x', 'y', 'f', 'g', 'h'];
      const operators = ['less than', 'equal to', 'greater than'];
      operands.forEach((operand) => {
        htmlStr += `<option>${operand}</option>`;
      });
      htmlStr += `</select></div>`;
      htmlStr += `<div class='col-sm'><select id='bp-opr'>`;
      operators.forEach((operator) => {
        htmlStr += `<option>${operator}</option>`;
      });
      htmlStr += `</select></div>`;
      htmlStr += `<div class='col-sm'><input id='bp-val' type='number'></div>`;
      $('.modal-body .row').html(htmlStr);
    },

    /**
    * @function bindEvents
    * This function calls the PlaybackService callbacks as per the button clicked
    */
    bindEvents() {
      let self = this;
      $('#save-bp').on('click', () => {
        self.currentOperand = $('#bp-opd').val();
        self.currentOperator = $('#bp-opr').val();
        self.currentVal = $('#bp-val').val();
        self.bpApplied = true;
        $('#bp-btn').click();
      });
      $('#remove-bp').on('click', () => {
        $('#bp-opd').val("");
        $('#bp-opr').val("");
        $('#bp-val').val("");
        self.currentOperand = null;
        self.currentOperator = null;
        self.currentVal = null;
        self.bpApplied = false;
      });
    },

    check(step){
      if(this.bpApplied){
        let compareVal = step.node[this.currentOperand];
        let breakAlg = false;
        switch (this.currentOperator) {
          case "less than":
            breakAlg = compareVal < parseInt(this.currentVal) ? true : false;
            break;
          case "equal to":
            breakAlg = compareVal == parseInt(this.currentVal) ? true : false;
            break;
          case "greater than":
            breakAlg = compareVal > parseInt(this.currentVal) ? true : false;
            break;
        }
        return breakAlg;
      }
    }

  }
}));

export default BreakpointsComponent;
