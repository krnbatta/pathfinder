import StateMachine from "javascript-state-machine";

import template from './template'
import Grid from '../../../../../models/Grid';
import $ from 'jquery';
import BaseComponent from '../../../../base-component';
import config from '../../../../../config';
import environment from '../../../../../environment';
import Store from '../../../../../services/store';
import GridService from '../../../../../services/grid';
import MeshService from '../../../../../services/mesh';
import RoadNetworkService from '../../../../../services/road-network';
import MicroModal from 'micromodal';

import ProgressBarService from '../../../../../services/progress-bar';
import Spinner from '../../../../../services/spinner';

/**
* @module components/playback-controls
* This component handles the playback controls buttons.
*/
let MapProcessorComponent = new StateMachine($.extend({}, BaseComponent, {
  data: {
  },
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#top-panel").append("<div id='map-processor'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#map-processor").html(template);
      this.hide();
      this.bindEvents();
    },

    onReady(){
      this.show();
      // this.addBreakpoint();
    },

    hide(){
      this.shown = false;
      $("#map-processor").hide();
    },

    show(){
      if(!this.shown){
        this.shown = true;
        $("#map-processor").show();
      }
    },

    processSucess(){

    },

    processFail(){

    },

    /**
    * @function bindEvents
    * This function calls the PlaybackService callbacks as per the button clicked
    */
    bindEvents() {
      MicroModal.init();
      $("#map-processor-input").on('change', (e) => {
        Spinner.show();
        if(this.validateFiles(e.target.files)){
          let progressElem = ProgressBarService.init(this.processSucess, this.processFail);
          $("#progress-container").html(progressElem);
          this.processFiles(e.target.files);
        }
        else{
          Spinner.hide();
          alert("Invalid format(s)");
        }
      });
    },

    processFiles(files){
      if(files.length > 1){
        let file1 = files[0];
        let file2 = files[1];
        let file1Name = file1.name.split(".");
        let file2Name = file2.name.split(".");
        let file1Type = file1Name.pop();
        file1Name = file1Name.join("");
        let file2Type = file2Name.pop();
        file2Name = file2Name.join("");
        let fileType = 'roadnetwork';
        let fileName = file1Type == "gr" ? file1Name : file2Name;
        let coFile = file1Type == "co" ? file1 : file2;
        let grFile = file1Type == "gr" ? file1 : file2;
        let map = Store.createRecord("Map", {fileType, fileName});
        Store.createRecord('RoadNetwork', {coFile, grFile, map});
        config.mapType = 'roadnetwork';
        this.fileName = `${file1Name}(roadnetwork)`;
        let roadNetworkPromise = RoadNetworkService.process();
        roadNetworkPromise.finally(() => {
          ProgressBarService.progress = 101;
          Spinner.hide();
        });
      }
      else{
        let file = files[0];
        let fileName = file.name.split(".");
        let fileType = fileName.pop();
        fileName = fileName.join("");
        let map = Store.createRecord("Map", {fileType, fileName});
        if(fileType == "grid"){
          Store.createRecord('Grid', file);
          config.mapType = 'grid';
          let gridPromise = GridService.process();
          gridPromise.finally(() => {
            ProgressBarService.progress = 101;
            Spinner.hide();
          });
        }
        else if(fileType == "mesh"){
          Store.createRecord('Mesh', file);
          config.mapType = 'mesh';
          let meshPromise = MeshService.process();
          meshPromise.finally(() => {
            ProgressBarService.progress = 101;
            Spinner.hide();
          });
        }
        this.fileName = `${fileName}(${fileType})`;
      }
    },

    validateFiles(files){
      if(files.length > 1){
        let file1 = files[0];
        let file2 = files[1];
        let file1Type = file1.name.split(".").pop();
        let file2Type = file2.name.split(".").pop();
        let hasCo = false;
        let hasGr = false;
        if(file1Type == "co" || file2Type == "co"){
          hasCo = true;
        }
        if(file1Type == "gr" || file2Type == "gr"){
          hasGr = true;
        }
        if(hasCo && hasGr){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        let file = files[0];
        let fileType = file.name.split(".").pop();
        if(fileType == "co" || fileType == "gr"){
          return false;
        }
        return true;
      }
    }
  }
}));

export default MapProcessorComponent;
