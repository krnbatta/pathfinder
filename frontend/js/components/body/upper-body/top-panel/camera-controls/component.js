import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../../../../base-component';
import Controller from '../../../../../controller';
import TimeTravelService from '../../../../../services/time-travel';

/**
* @module components/playback-controls
* This component handles the playback controls buttons.
*/
let CameraControlsComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#top-panel").append("<div id='camera-controls'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#camera-controls").html(template);
      this.bindEvents();
    },

    hideMapControl(){
      $("#fit-map").parent('.btn-with-title').hide();
    },

    showMapControl(){
      $("#fit-map").parent('.btn-with-title').show();
    },

    hideScaleControl(){
      $("#fit-scale").parent('.btn-with-title').hide();
    },

    showScaleControl(){
      $("#fit-scale").parent('.btn-with-title').show();
    },

    hideDebuggerControl(){
      $("#fit-debugger").parent('.btn-with-title').hide();
    },

    showDebuggerControl(){
      $("#fit-debugger").parent('.btn-with-title').show();
    },

    /**
    * @function bindEvents
    * This function calls the PlaybackService callbacks as per the button clicked
    */
    bindEvents() {
      $("#fit-map").on("click", () => {
        Controller.fitMap();
      });
      $("#fit-debugger").on("click", () => {
        Controller.fitDebugger();
      });
      $("#fit-scale").on("click", () => {
        Controller.fitScale();
      });
    }
  }
}));

export default CameraControlsComponent;
