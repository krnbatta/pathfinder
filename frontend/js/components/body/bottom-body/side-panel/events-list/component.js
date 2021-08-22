import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../../../../base-component';
import LoggerOverlayComponent from "../logger-overlay/component";
import PlaybackService from '../../../../../services/playback';
import Store from '../../../../../services/store';
import nodeColor from '../../../../../utils/node-color';

import Controller from '../../../../../controller';
import config from '../../../../../config';

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
      this.highlightNodes();
    },

    clearHighlighting(){
      document.querySelectorAll(".event[data-highlight='1']").forEach((node) => {
        let rgba = `rgba(${node.dataset.r},${node.dataset.g},${node.dataset.b},0.5)`
        node.style.background = rgba;
        delete node.dataset.highlight;
        node.style.removeProperty('font-weight');
      });
    },

    highlightNodes(){
      this.clearHighlighting();
      let currentNodeId = Controller.currentId - 1;
      let currentNode = Store.findById("Node", currentNodeId);
      let siblingNodes = currentNode.siblingNodes;
      let parentNode = currentNode.parentNode;
      if(parentNode){
        this.highlight(parentNode._id);
      }
      this.highlight(currentNode._id);
      if(currentNode.step.isFrontier){
        let hex = config.nodeAttrs.frontier.fillColor.toString(16).padStart(6, '0')
        let rgba = `rgba(${'0x' + hex[0] + hex[1] | 0},${'0x' + hex[2] + hex[3] | 0},${'0x' + hex[4] + hex[5] | 0},1)`;
        this.highlight(currentNode._id, rgba);
        siblingNodes.forEach((node) => {
          this.highlight(node._id, rgba);
        });
      }
    },

    highlight(nodeId, rgba=null){
      let node = document.getElementById(`event-${nodeId}`);
      if(!node){
        return;
      }
      if(!rgba){
        rgba = `rgba(${node.dataset.r},${node.dataset.g},${node.dataset.b},1)`;
      }
      node.dataset.highlight = '1';
      node.style.background = rgba;
      node.style.fontWeight = 'bold';
    },

    /**
    * @function reset
    * This function hides the event list when algorithm is stopped.
    */
    reset() {
      $("#events").hide();
      LoggerOverlayComponent.reset();
    },

    /**
    * @function addEvent
    * This function add li element with the event details passed to it. It also binds retrace history upon clicking on the event.
    * @param {Object} event - It has _id, text
    */
    addEvent(event) {
      this.events.push(event);
      let hex = config.nodeAttrs[nodeColor[event.type]].fillColor.toString(16).padStart(6, '0');
      let r = '0x' + hex[0] + hex[1] | 0;
      let g = '0x' + hex[2] + hex[3] | 0;
      let b = '0x' + hex[4] + hex[5] | 0;
      let a = 0.5;
      let rgba = `rgba(${r},${g},${b},${a})`;
      let li = $.parseHTML(`<li id='event-${event._id}' class="event" style="background: ${rgba};" data-r=${r} data-g=${g} data-b=${b} data-a=${a}>${event.text}</li>`)[0];
      $(li).on("click", (e) => {
        Controller.retraceHistory(event._id);
      });
      $("#events").append(li);
      window.requestAnimationFrame(() => {
        $("#events")[0].scrollTop = $("#events")[0].scrollHeight;
      });
      LoggerOverlayComponent.setNode(event.node);
    },

    /**
    * @function removeEvent
    * This function removes the last event from the list and screen.
    */
    removeEvent(){
      this.events.pop();
      $('#events .event:last-child').remove();
      $("#events")[0].scrollTop = $("#events")[0].scrollHeight;
      LoggerOverlayComponent.setNode(this.events[this.events.length - 1]);
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
      LoggerOverlayComponent.setNode(this.events[this.events.length - 1]);
    }
  }
}));

export default EventsListComponent;
