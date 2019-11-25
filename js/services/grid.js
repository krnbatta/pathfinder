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
        let textFile = event.target;
        const data = textFile.result.split(/\n|\r\n/);

        data.shift();

        const height = Number(data.shift().split(' ').pop());
        const width = Number(data.shift().split(' ').pop());
        data.shift();
        const gridStr = data.reduce((f, e) => f + e, '');
        console.log("gridData", width, height, gridStr);

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
      let grid = Store.find('Grid');
      grid.cells.then((cells) => {
        Controller.setupRenderer();
        grid.gridData.then((gridData) => {
          cells.forEach((cell) => {
            cell.isMap = true;
            let cellElement = nodeFactory(node);
            insertNode(Controller, cellElement);
          });
        });
      }, (err) => {
        errorNotifier(err);
      });
    }
  }
}
