import StateMachine from "javascript-state-machine";

import template from './template'
import Grid from '../../models/Grid';
import $ from 'jquery';
import BaseComponent from '../base-component';
import config from '../../config';
import environment from '../../environment';
import Store from '../../services/Store';
import GridService from '../../services/grid';
import MeshDrawer from '../../services/mesh-drawer';

let MapComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    onBeforeInit() {
      $("#pathfinder").append("<div id='map-component'></div>");
    },
    onLeaveNone() {
      $("#map-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
      $("#load-map").on('change', (e) => {
        let file = e.target.files[0];
        let fileType = file.name.split(".").pop();
        if(fileType == "grid"){
          Store.createRecord('Grid', file);
          this.map = Store.find('Grid');
          GridService.drawer.draw();
        }
        else if(fileType == "mesh"){
          Store.createRecord('Mesh', file);
          this.mesh = Store.find('Mesh');
          MeshDrawer.draw();
        }
        $("#map-component").hide();
      });
    }
  }
}));

export default MapComponent;
