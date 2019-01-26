import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';

let MonitorComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    onBeforeInit() {
      $("#pathfinder").append("<div id='monitor-component'></div>");
    },
    onLeaveNone() {
      $("#monitor-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
    },
    display(content) {
      $("#monitor .screen").append(content);
    }
  }
}));

export default MonitorComponent;
