import StateMachine from "javascript-state-machine";

import template from './template';
import Store from '../../services/store';
import $ from 'jquery';
import BaseComponent from '../base-component';
import Controller from '../../controller';

/**
* @module components/debugger
* This component handles the uploading of algorithm event debug file.
*/
let DebuggerComponent = new StateMachine($.extend({}, BaseComponent, {

  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#pathfinder").append("<div id='debug-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#debug-component").html(template);
      this.bindEvents();
    },

    /**
    * @function bindEvents
    * This function creates Tracer record from the algorithm debug file, hides map and algorithm upload. It then starts the controller.
    */
    bindEvents() {
      $("#load-algo").on('change', (e) => {
        let debugFile = e.target.files[0];
        Store.createRecord('Tracer', debugFile);
        this.tracer = Store.find('Tracer');
        Controller.start();
        $("#map-component").hide();
        $("#debug-component").hide();
      });
    }
  }
}));

export default DebuggerComponent;
