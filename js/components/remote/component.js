import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';

let RemoteComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    onBeforeInit() {
      $("#pathfinder").append("<div id='remote-component'></div>");
    },
    onLeaveNone() {
      $("#remote-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
    },
  }
}));

export default RemoteComponent;
