import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';
import PlaybackService from '../../services/playback';

import Controller from '../../controller';

import TabletComponent from '../tablet/component';

let EventsListComponent = new StateMachine($.extend({}, BaseComponent, {
  data: {
    events: []
  },
  methods: {
    onBeforeInit() {
      TabletComponent.display("<div id='events-list-component'></div>");
    },
    onLeaveNone() {
      $("#events-list-component").html(template);
      this.bindCallbacks();
      this.bindEvents();
    },
    bindCallbacks() {
      PlaybackService.addCallback('init', this.reset.bind(this));
      PlaybackService.addCallback('play', this.play.bind(this));
      PlaybackService.addCallback('pause', this.pause.bind(this));
      PlaybackService.addCallback('reset', this.reset.bind(this));
    },
    bindEvents() {
    },
    play() {
      $("#events").hide();
    },
    pause() {
      $("#events").show();
    },
    reset() {
      $("#events").hide();
    },
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
    removeEvent(){
      this.events.pop();
      $('#events .event:last-child').remove();
      $("#events-list")[0].scrollTop = $("#events")[0].offsetHeight;
    },
    clearEvents(id){
      let pruneLength = this.events.length - id;
      let pruneEvents = $('#events .event').slice(-pruneLength);
      pruneEvents.remove();
      this.events.length = id;
    }
  }
}));

export default EventsListComponent;
