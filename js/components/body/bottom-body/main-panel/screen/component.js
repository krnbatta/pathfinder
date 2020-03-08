import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../../../../base-component';

/**
* @module components/monitor
* This component handles the uploading of algorithm event debug file.
*/
let ScreenComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#main-panel").append("<div id='screen'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#screen").html(template);
      this.bindEvents();
    },

    bindEvents() {
    }
  }
}));

export default ScreenComponent;
