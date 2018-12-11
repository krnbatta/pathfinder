import template from './template'
import mapParser from './mapParser'
import mapBuilder from './mapParser'
import Raphael from 'raphael'
import Map from './models/Map';

let DebuggerComponent = $.extend(Component, {

  methods: {
    onLeaveNone() {
      $("#path-component").html(template);
      this.bindEvents();
    },
    bindEvents() {
      $(".path_component__load_algo").on('change', (e) => {
        let debugFile = e.target.files[0];
        this.debugger = new Debugger(debugFile);
      });
    }
  }
});
