import StateMachine from "javascript-state-machine";

import template from './template';
import Store from '../../services/Store';
import $ from 'jquery';
import BaseComponent from '../base-component';
import Controller from '../../controller';

let DebuggerComponent = new StateMachine($.extend({}, BaseComponent, {

  methods: {
    onBeforeInit() {
      $("#pathfinder").append("<div id='debug-component'></div>");
    },
    onLeaveNone() {
      $("#debug-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
      $("#load-algo").on('change', (e) => {
        let debugFile = e.target.files[0];
        Store.createRecord('Tracer', debugFile);
        this.tracer = Store.find('Tracer');
        Controller.start();
      });
    }
  }
}));

export default DebuggerComponent;
