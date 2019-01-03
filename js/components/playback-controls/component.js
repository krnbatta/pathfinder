import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';
import Controller from '../../controller';
import PlaybackService from '../../services/playback';

let PlaybackControlsComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    onBeforeInit() {
      $("#pathfinder").append("<div id='playback-controls-component'></div>");
    },
    onLeaveNone() {
      $("#playback-controls-component").html(template);
      this.hideAll();
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
      $("#play").on('click', (e) => {
        PlaybackService.play();
      });
      $("#pause").on('click', (e) => {
        PlaybackService.pause();
      });
      $("#stop").on('click', (e) => {
        PlaybackService.reset();
      });
      $("#step-forward").on('click', (e) => {
        Controller.stepForward();
      });
      $("#step-backward").on('click', (e) => {
        Controller.stepBackward();
      });
    },
    hideAll(){
      $('#play').hide();
      $('#step-forward').hide();
      $('#step-backward').hide();
      $('#pause').hide();
      $('#stop').hide();
    },
    play(){
      $('#play').hide();
      $('#step-forward').hide();
      $('#step-backward').hide();
      $('#pause').show();
      $('#stop').show();
    },
    pause(){
      $('#play').show();
      $('#step-forward').show();
      $('#step-backward').show();
      $('#pause').hide();
      $('#stop').show();
    },
    reset(){
      $('#play').show();
      $('#step-forward').show();
      $('#step-backward').show();
      $('#pause').hide();
      $('#stop').hide();
    }
  }
}));

export default PlaybackControlsComponent;
