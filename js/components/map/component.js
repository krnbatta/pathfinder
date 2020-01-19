import StateMachine from "javascript-state-machine";

import template from './template'
import Grid from '../../models/Grid';
import $ from 'jquery';
import BaseComponent from '../base-component';
import config from '../../config';
import environment from '../../environment';
import Store from '../../services/Store';
import GridService from '../../services/grid';
import MeshService from '../../services/mesh';

/**
* @module components/map
* This component handles the uploading of map file.
*/
let MapComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#pathfinder").append("<div id='map-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#map-component").html(template);
      this.bindEvents();
    },

    /**
    * @function bindEvents
    * This function creates map record from the map fil and hides map upload. It then draws the map on the screen.
    */
    bindEvents() {
      $("#load-map").on('change', (e) => {
        let file = e.target.files[0];
        let fileType = file.name.split(".").pop();
        if(fileType == "grid"){
          Store.createRecord('Grid', file);
          this.map = Store.find('Grid');
          GridService.drawer.draw();
          // GridService.process();
        }
        else if(fileType == "mesh"){
          Store.createRecord('Mesh', file);
          this.mesh = Store.find('Mesh');
          MeshService.drawer.draw();
          // MeshService.process();
        }
        $("#map-component").hide();
      });
    }
  }
}));

export default MapComponent;
