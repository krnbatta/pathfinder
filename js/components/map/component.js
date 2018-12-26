import StateMachine from "javascript-state-machine";

import template from './template'
import Map from '../../models/Map';
import $ from 'jquery';
import BaseComponent from '../base-component';
import errorNotifier from '../../utils/error-notifier';

let MapComponent = new StateMachine($.extend(BaseComponent, {
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
        this.map = new Map(mapFile);
        this.drawMap();
      });
    },
    drawMap() {
      this.map.mapNodes.then((nodesStr) => {
        $('#map-canvas').html(nodesStr);
      }, (err) => {
        errorNotifier(err);
      });
    }
  }
}));

export default MapComponent;
