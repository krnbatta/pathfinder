import * as PIXI from 'pixi.js'

import Store from './store';
import config from '../config';
import environment from '../environment';
import errorNotifier from './error-notifier';
import nodeFactory from '../utils/node-factory';
import GraphicsManager from './graphics-manager';
import MapProcessor from './map-processor';
import Controller from '../controller';
import $ from "jquery";

/** @module services/grid
* This service is responsible for: parsing grid file, building grid cells and drawing grid on canvas.
*/
export default {
  renderMap(resolve, reject){
    try{
      let grid = Store.find("Grid");
      let map = Store.find("Map");
      grid.gridData.then((gridData) => {
        Controller.setupRenderer();
        let mapSprite = new PIXI.Sprite.from(`${config.clientAddr}/maps/images/${map.mapName}.png`);
        mapSprite.width = gridData.width * config.nodeSize;
        mapSprite.height = gridData.height * config.nodeSize;
        GraphicsManager.insert(Controller, mapSprite);
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }
    catch(e){
      reject(e);
    }
  },

  checkMap(resolve, reject){
    let map = Store.find("Map");
    var img = new Image();
    let self = this;
    img.onerror = function(){
      //send request to server
      self.sendToServer(resolve, reject);
    }
    img.onload = function(){
      //load map from image directly
      self.renderMap(resolve, reject);
      img = null;
    }
    img.src = `${config.clientAddr}/maps/images/${map.mapName}.png`;
  },

  sendToServer(resolve, reject){
    let grid = Store.find("Grid");
    let map = Store.find("Map");
    grid.gridData.then((gridData) => {
      fetch(config.processGridUrl, {
        method: "POST",
        body: JSON.stringify({width: gridData.width, height: gridData.height, gridStr: gridData.gridStr, fileName: map.mapName}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json()).then((data) => {
        if(data.done){
          this.renderMap(resolve, reject);
        }
        else{
          reject();
        }
      });
    });
  },
  /**
  * Parser parses the grid map file by extracting height, width and structure of map and passing this into callback.
  * @public
  */
  parser: {
    parse(file, callback) {
      let gridReader = new FileReader();

      gridReader.addEventListener("load", function(event) {
        //TODO: Take only first 2 lines and leave the rest as such.
        let textFile = event.target;
        const data = textFile.result.split(/\n|\r\n/);

        data.shift();

        const height = Number(data.shift().split(' ').pop());
        const width = Number(data.shift().split(' ').pop());
        data.shift();
        const gridStr = data.reduce((f, e) => f + e, '');
        // console.log("gridData", width, height, gridStr);

        const gridData = {
          height: height,
          width: width,
          gridStr: gridStr
        };
        callback(gridData);
      });

      //Read the text file
      gridReader.readAsText(file);
    }
  },

  /**
  * Builder takes the gridData and builds all the cells of the grid map. Each cell has property of coordinates, dimensions, color, border.
  * @public
  */
  builder: {
    cells: [],
    width: null,
    height: null,
    gridStr: null,

    build(gridData, callback) {
      //Is object creation required?
      //Is Promises required?
      //Draw white background. Draw only black obstacles later.
      this.gridStr = gridData.gridStr;
      this.width = gridData.width;
      this.height = gridData.height;
      let tasks = [];
      for (let i = 0; i < this.width; ++i) {
        tasks.push(this.createRowTask(i));
      }
      Promise.all(tasks).then(() => {
        callback(this.cells.flat());
      });
    },

    createRowTask(rowId) {
      return new Promise((resolve, reject) => {
        this.cells[rowId] = [];
        for (let colId = 0; colId < this.width; ++colId) {
          let x = colId * config.nodeSize;
          let y = rowId * config.nodeSize;
          let stringIndex = rowId * this.width + colId;
          let fillColor = config.pathColor;
          if (this.gridStr[stringIndex] == '@') {
            fillColor = config.wallColor;
          }
          let attrs = {
            x: x,
            y: y,
            width: config.nodeSize,
            height: config.nodeSize,
            fillStyle: fillColor,
            strokeStyle: config.borderColor,
          };
          this.cells[rowId].push(attrs);
        }
        resolve();
      });
    }
  },

  /**
  * Drawer draws the map on the canvas. It takes the cells from the Grid Model created by the builder and constructs PIXI.Graphics object and finally renders on the canvas.
  * @public
  */
  drawer: {
    draw() {
      let mapContainer = new PIXI.Container();
      let grid = Store.find('Grid');
      grid.cells.then((cells) => {
        Controller.setupRenderer();
        grid.gridData.then((gridData) => {
          cells.forEach((cell) => {
            cell.isMap = true;
            let cellElement = nodeFactory(cell);
            mapContainer.addChild(cellElement);
          });
          GraphicsManager.insert(Controller, mapContainer);
        });
      }, (err) => {
        errorNotifier(err);
      });
    }
  },

  process(){
    return new Promise((resolve, reject) => {
      let grid = Store.find("Grid");
      let map = Store.find("Map");
      grid.gridData.then((gridData) => {
        MapProcessor.processGrid({width: gridData.width, height: gridData.height, gridStr: gridData.gridStr, fileName: map.mapName, resolve: resolve, reject: reject});
      });
    });
  }
}
