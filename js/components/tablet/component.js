import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';

let TabletComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    onBeforeInit() {
      $("#pathfinder").append("<div id='tablet-component'></div>");
    },
    onLeaveNone() {
      $("#tablet-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
    },
    display(content) {
      $("#tablet-content").append(content);
    }
  }
}));

export default TabletComponent;
