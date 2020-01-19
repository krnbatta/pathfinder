import Store from './Store';
import config from '../config';
import environment from '../environment';
import errorNotifier from './error-notifier';
import nodeFactory from '../utils/node-factory';
import insertNode from '../utils/insert-node';
import Controller from '../controller';

/** @module services/grid
* This service is responsible for: parsing grid file, building grid cells and drawing grid on canvas.
*/
export default {
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
          insertNode(Controller, mapContainer);
        });
      }, (err) => {
        errorNotifier(err);
      });
    }
  },

  process(){
    let grid = Store.find('Grid');
    grid.gridData.then((gridData) => {
      let height = gridData.height;
      let width = gridData.width;
      let gridStr = gridData.gridStr;
      Controller.setupRenderer();
      canvas = document.createElement("canvas");
      canvas.id = "map-canvas";
      let screen = document.getElementsByClassName("screen")[0];
      screen.appendChild(canvas);
      let canvas = document.getElementById("map-canvas");
      let webglCanvas = document.getElementById("canvas");
      canvas.style.position = 'absolute';
      canvas.width = width * config.nodeSize;
      canvas.height = height * config.nodeSize;
      canvas.style.top = 0;
      canvas.style.left = 0;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      for (var y = 0; y <= height; y++) {
        for (var x = 0; x <= width; x++) {
          var stringIndex = y * width + x;
          if (gridStr[stringIndex] == '@') {
            ctx.fillRect(x*config.nodeSize, y*config.nodeSize, config.nodeSize, config.nodeSize);
          }
        }
      }

      for(var i=0; i<=width; i++){
        let line = new PIXI.Graphics();
        let x1, x2, y1, y2;
        x1 = i*config.nodeSize;
        x2 = i*config.nodeSize;
        y1 = 0;
        y2 = height * config.nodeSize;
        if(i==0){
          x1 += 1;
          x2 += 1;
        }
        if(i==width){
          x1 -= 1;
          x2 -= 1;
        }
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      for(var i=0; i<=height; i++){
        let line = new PIXI.Graphics();
        let x1, x2, y1, y2;
        y1 = i*config.nodeSize;
        y2 = i*config.nodeSize;
        x1 = 0;
        x2 = width * config.nodeSize;
        if(i==0){
          y1 += 1;
          y2 += 1;
        }
        if(i==height){
          y1 -= 1;
          y2 -= 1;
        }
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    });
  }
}
