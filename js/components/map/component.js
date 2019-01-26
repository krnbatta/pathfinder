import StateMachine from "javascript-state-machine";

import template from './template'
import Map from '../../models/Map';
import $ from 'jquery';
import BaseComponent from '../base-component';
import config from '../../config';
import environment from '../../environment';
import Store from '../../services/Store';
import MapDrawer from '../../services/map-drawer';

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
        let mapFile = e.target.files[0];
        Store.createRecord('Map', mapFile);
        this.map = Store.find('Map');
        MapDrawer.draw();
        $("#map-component").hide();
      });
    }
  }
}));

export default MapComponent;
