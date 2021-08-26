import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../../../../base-component';
import LoggerOverlayComponent from "../logger-overlay/component";
import PlaybackService from '../../../../../services/playback';
import Store from '../../../../../services/store';
import nodeColor from '../../../../../utils/node-color';
import TimeTravelService from "../../../../../services/time-travel";

import Controller from '../../../../../controller';
import config from '../../../../../config';
import BreakpointService from "../../../../../services/breakpoint";

/**
* @module components/events-list
* This component handles the display of events of algorithms on the panel
*/
let EventsListComponent = new StateMachine($.extend({}, BaseComponent, {
  data: {
    events: []
  },
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#side-panel").append("<div id='events-list'></div>");
    },

    onReady(){
      LoggerOverlayComponent.init();
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file, initiates event binding and callback binding.
    */
    onLeaveNone() {
      $("#events-list").html(template);
      this.bindCallbacks();
      this.bindEvents();
    },

    /**
    * @function bindCallbacks
    * This function add the playback functions to playback callback service.
    */
    bindCallbacks() {
      PlaybackService.addCallback('init', this.reset.bind(this));
      PlaybackService.addCallback('play', this.play.bind(this));
      PlaybackService.addCallback('pause', this.pause.bind(this));
      PlaybackService.addCallback('reset', this.reset.bind(this));
    },

    bindEvents() {
    },

    /**
    * @function play
    * This function hides the event list when algorithm is running.
    */
    play() {
      $("#events").hide();
      LoggerOverlayComponent.play();
    },

    /**
    * @function pause
    * This function shows the event list when algorithm is paused.
    */
    pause() {
      $("#events").show();
      LoggerOverlayComponent.pause();
    },

    /**
    * @function reset
    * This function hides the event list when algorithm is stopped.
    */
    reset() {
      this.highlightedEvents = [];
      let tracer = Store.find('Tracer');
      tracer.eventsListHtml.then((eventsListHtml) => {
        $("#events").html(eventsListHtml);
        $('.event').on("click", (e) => {
          if(e.target.classList.contains('debuggable')) {
            e.target.classList.toggle('active');
            let node = Store.findById('Node', e.currentTarget.dataset.id);
            BreakpointService.setExplicitBps(node);
            e.preventDefault();
            return false;
          }
          TimeTravelService.goToEvent(Controller, e.currentTarget.dataset.id);
          // Controller.retraceHistory(e.target.dataset.id);
        });
      });
      LoggerOverlayComponent.reset();
    }
  }
}));
window.comp = EventsListComponent;
export default EventsListComponent;
