import template from './template'
import mapParser from './mapParser'
import mapBuilder from './mapParser'
import Raphael from 'Raphael'
import Map from './models/Map';

let MapComponent = $.extend(Component, {

  methods: {
    onLeaveNone() {
      $("#path-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
      $(".path_component__load_map").on('change', (e) => {
        let mapFile = e.target.files[0];
        this.map = new Map(mapFile);
        this.drawMap();
      });
    },
    drawMap() {
      this.map.mapNodes.then((nodes) => {
        let nodesStr = nodes.join("");
        $('#map-canvas').html(nodesStr);
      }, (err) => {
        errorNotifier(err);
      });
    }
  }
});
