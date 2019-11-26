import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';

/**
* @module components/tablet
* This component handles the display of the algorithm steps.
*/
let TabletComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#pathfinder").append("<div id='tablet-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file.
    */
    onLeaveNone() {
      $("#tablet-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
    },

    /**
    * @function display
    * This function appends the html passed to it in the component.
    * @param {String} content
    */
    display(content) {
      $("#tablet-content").append(content);
    }
  }
}));

export default TabletComponent;
