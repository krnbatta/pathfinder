import * as PIXI from 'pixi.js'

import Store from './store';
import config from '../config';
import environment from '../environment';
import errorNotifier from './error-notifier';
import polygonFactory from '../utils/polygon-factory';
import GraphicsManager from '../services/graphics-manager';
import Controller from '../controller';
import nodeResize from '../utils/node-resize';

/** @module services/mesh
* This service is responsible for: parsing mesh file, building grid poylgons and drawing mesh on canvas.
*/
export default {
  /**
  * Parser parses the mesh map file by extracting totalPoints, totalPolygons and structure of map and passing this into callback.
  * @public
  */
  parser: {
    parse(file, callback) {
      let meshReader = new FileReader();

      meshReader.addEventListener("load", function(event) {
          let textFile = event.target;
          const data = textFile.result.split(/\n|\r\n/);

          data.shift();
          data.shift();
          const totalPoints = Number(data[0].split(' ')[0]);
          const totalPolygons = Number(data[0].split(' ')[1]);
          nodeResize('mesh', totalPolygons);

          data.shift();
          const pointsArr = data.slice(0, totalPoints).map((pointLine) => pointLine.split(" ").slice(0, 2)).map((pt) => [parseInt(pt[0]), parseInt(pt[1])]);
          let maxX = Math.max.apply(null, pointsArr.map((p) => p[0]));
          let maxY = Math.max.apply(null, pointsArr.map((p) => p[1]));
          const polygonData = data.slice(totalPoints, data.length-1);
          let polygonsArr = [];
          polygonData.forEach((polygonLine) => {
            let pts = polygonLine.split(" ");
            let totalPolygonPoints = parseInt(pts[0]);
            let firstPoint;
            let points = [];
            pts.slice(1, totalPolygonPoints + 1).forEach((pt, index) => {
              let point = pointsArr[parseInt(pt)];
              if(index == 0){
                firstPoint = point;
              }
              points.push(point[0]*config.nodeSize, point[1]*config.nodeSize);
            });
            points.push(firstPoint[0]*config.nodeSize, firstPoint[1]*config.nodeSize);
            polygonsArr.push(points);
          });
          console.log("meshData", totalPoints, totalPolygons, pointsArr, polygonsArr, maxX, maxY);

          const meshData =  {totalPoints:totalPoints, totalPolygons:totalPolygons, pointsArr:pointsArr, polygonsArr:polygonsArr, maxX:maxX, maxY:maxY};
          callback(meshData);
      });

      //Read the text file
      meshReader.readAsText(file);
    }
  },

  /**
  * Builder takes the meshData and builds all the polygons of the mesh map. Each polygon has property of points coordinates, color, border.
  * @public
  */
  builder: {
    polygons: [],
    build(meshData, callback){
      let polygonsArr = meshData.polygonsArr;
      let tasks = [];
      for (let i = 0; i < polygonsArr.length; ++i) {
        tasks.push(this.createPolygonTask(polygonsArr[i]));
      }
      Promise.all(tasks).then(() => {
        callback(this.polygons);
      });
    },
    createPolygonTask(coordinates){
      return new Promise((resolve, reject) => {
        let points = coordinates.flat();
        let polygon = {
          points: points.concat(points.slice(0,2)).map((pt) => pt*config.nodeSize),
          fillStyle: config.pathColor,
          strokeStyle: config.borderColor,
        };
        this.polygons.push(polygon);
        resolve();
      });
    }
  },

  /**
  * Drawer draws the map on the canvas. It takes the polygons from the Mesh Model created by the builder and constructs PIXI.Graphics object and finally renders on the canvas.
  * @public
  */
  drawer: {
    draw() {
      var mesh = Store.find('Mesh');
      mesh.meshPolygons.then(function (meshPolygons) {
        Controller.setupRenderer();
        mesh.meshData.then(function (meshData) {
          meshPolygons.forEach(function (polygonObj) {
            var polygon = polygonFactory(polygonObj);
            GraphicsManager.insert(Controller, polygon);
          });
        });
      }, function (err) {
        errorNotifier(err);
      });
    }
  },
  process(){
    let mesh = Store.find('Mesh');
    mesh.meshData.then((meshData) => {
      Controller.setupRenderer();
      let container = new PIXI.Container();
      for (let i = 0; i < meshData.polygonsArr.length; ++i) {
        let points = meshData.polygonsArr[i];
        let polygon = new PIXI.Graphics();
        polygon.lineStyle(1, 0x000000);
        polygon.beginFill(0xFFFFFF);
        polygon.drawPolygon(points);
        polygon.endFill();
        container.addChild(polygon);
      }
      GraphicsManager.insert(Controller, container);
    });
  }
}
