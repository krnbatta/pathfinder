import StateMachine from "javascript-state-machine";

import template from './template';
import mapParser from '../../utils/map-parser';
import mapBuilder from '../../utils/map-builder';
import Map from '../../models/Map';
import $ from 'jquery';
import BaseComponent from '../base-component';

let DebuggerComponent = new StateMachine($.extend(BaseComponent, {

  methods: {
    onLeaveNone() {
      $("#path-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
      $(".path_component__load_algo").on('change', (e) => {
        let debugFile = e.target.files[0];
        this.debugger = new Debugger(debugFile);
      });
    }
  }
}));

export default DebuggerComponent;
