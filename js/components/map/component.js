import StateMachine from "javascript-state-machine";

import template from './template'
import Map from '../../models/Map';
import $ from 'jquery';
import BaseComponent from '../base-component';
import errorNotifier from '../../utils/error-notifier';
import config from '../../config';

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
      this.map.mapNodes.then((mapNodes) => {
        if(config.renderType == 'svg'){
          $('#map-canvas').html(mapNodes);
        }
        else{
          let canvas = document.getElementById('map-canvas');
          let ctx = canvas.getContext('2d');
          this.map.mapData.then((mapData) => {
            canvas.height = mapData.height*config.nodeSize;
            canvas.width = mapData.width*config.nodeSize;
            mapNodes.forEach((node) => {
              ctx.fillStyle = node.fillStyle;
              ctx.strokeStyle = node.strokeStyle;
              ctx.fillRect(node.x, node.y, node.width, node.height);
              ctx.strokeRect(node.x, node.y, node.width, node.height);
            });
          });
        }
      }, (err) => {
        errorNotifier(err);
      });
    }
  }
}));

export default MapComponent;
