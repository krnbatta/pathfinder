import StateMachine from "javascript-state-machine";

import template from './template';
import Store from '../../../../../services/store';
import $ from 'jquery';
import BaseComponent from '../../../../base-component';
import Controller from '../../../../../controller';
import MapComponent from '../map/component';
import BreakpointsComponent from '../breakpoints/component';
import ComparatorComponent from '../comparator/component';
import TimeTravelComponent from '../time-travel/component';
import CameraControlsComponent from '../camera-controls/component';

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
      $("#top-panel").append("<div id='algorithm'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#algorithm").html(template);
      this.bindEvents();
    },

    /**
    * @function bindEvents
    * This function creates Tracer record from the algorithm debug file, hides map and algorithm upload. It then starts the controller.
    */
    bindEvents() {
      $("#debug-input").on('change', (e) => {
        let debugFile = e.target.files[0];
        Store.createRecord('Tracer', debugFile);
        Controller.traceTitle = debugFile.name.split(".")[0];
        this.postProcess();
      });
    },

    postProcess(){
      this.tracer = Store.find('Tracer');
      if(!Controller.mapTitle){
        $("#map").hide();
        // $("#map").html(`<div id='map-label'>No Operating Environment Uploaded</div>`);
      }
      $("#algorithm").html(`<div id='debug-label'>Search Trace: ${Controller.traceTitle}</div>`);
      Controller.start();
      BreakpointsComponent.show();
      ComparatorComponent.show();
      TimeTravelComponent.show();
      CameraControlsComponent.showDebuggerControl();
      CameraControlsComponent.showScaleControl();
      this.tracer.steps.then(() => {
        Controller.fitDebugger();
      });
    }
  }
}));

export default DebuggerComponent;
