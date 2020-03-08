import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../../../../base-component';
import PlaybackService from '../../../../../services/playback';

import Controller from '../../../../../controller';

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
    },

    /**
    * @function pause
    * This function shows the event list when algorithm is paused.
    */
    pause() {
      $("#events").show();
    },

    /**
    * @function reset
    * This function hides the event list when algorithm is stopped.
    */
    reset() {
      $("#events").hide();
    },

    /**
    * @function addEvent
    * This function add li element with the event details passed to it. It also binds retrace history upon clicking on the event.
    * @param {Object} event - It has _id, text
    */
    addEvent(event) {
      this.events.push(event);
      let li = $.parseHTML(`<li class="event">${event.text}</li>`)[0];
      $(li).on("click", (e) => {
        Controller.retraceHistory(event._id);
      });
      $("#events").append(li);
      window.requestAnimationFrame(() => {
        $("#events-list")[0].scrollTop = $("#events-list")[0].scrollHeight;
      });
    },

    /**
    * @function removeEvent
    * This function removes the last event from the list and screen.
    */
    removeEvent(){
      this.events.pop();
      $('#events .event:last-child').remove();
      $("#events-list")[0].scrollTop = $("#events")[0].offsetHeight;
    },

    /**
    * @function clearEvents
    * This function clear all the events up to the id passed.
    * @param {number} id
    */
    clearEvents(id){
      let pruneLength = this.events.length - id;
      let pruneEvents = $('#events .event').slice(-pruneLength);
      pruneEvents.remove();
      this.events.length = id;
    }
  }
}));

export default EventsListComponent;
