import Store from './Store';
import config from '../config';
import environment from '../environment';
import errorNotifier from './error-notifier';
import polygonFactory from '../utils/polygon-factory';
import insertNode from '../utils/insert-node';
import insertEdges from '../utils/insert-edges';
import Controller from '../controller';

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
          data.shift();
          const pointsArr = data.slice(0, totalPoints).map((pointLine) => pointLine.split(" ").slice(0, 2)).map((pt) => [parseInt(pt[0]), parseInt(pt[1])]);
          let maxX = Math.max.apply(null, pointsArr.map((p) => p[0]));
          let maxY = Math.max.apply(null, pointsArr.map((p) => p[1]));
          const polygonData = data.slice(totalPoints, data.length);
          let polygonsArr = [];
          polygonData.forEach((polygonLine) => {
            let pts = polygonLine.split(" ")
            let totalPolygonPoints = parseInt(pts[0])
            let points = pts.slice(1, totalPolygonPoints + 1).map((pt) => pointsArr[parseInt(pt)]);
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
            insertNode(Controller, polygon);
          });
        });
      }, function (err) {
        errorNotifier(err);
      });
    }
  },
  createCanvas(id, width, height){
    let canvasId = `map-canvas${id}`;
    let canvas = document.createElement("canvas");
    canvas.id = canvasId;
    let screen = document.getElementsByClassName("screen")[0];
    screen.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    return canvas;
  },
  paintCanvas(index, width, height, chunk, type){
    let canvas = this.createCanvas(index, width, height);
    let offscreen = canvas.transferControlToOffscreen();
    let worker = new Worker("data:application/x-javascript;base64, b25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7CiAgaW1wb3J0U2NyaXB0cyhldnQuZGF0YS5zY3JpcHRVcmwpOwogIHBvc3RNZXNzYWdlKG1haW4oZXZ0LmRhdGEucGFyYW1zKSk7Cn07Cg==");
    worker.postMessage({scriptUrl: `file:///Users/krnbatta/Projects/monash/intern/pathfinder/js/workers/${type}Polygons.js`, params: {canvas: offscreen, width: width, height: height, polygonsArr: chunk, nodeSize: config.nodeSize}}, [offscreen]);
  },
  process(){
    let mesh = Store.find('Mesh');
    mesh.meshData.then((meshData) => {
      let maxX = meshData.maxX;
      let maxY = meshData.maxY;
      let polygonsArr = meshData.polygonsArr;
      Controller.setupRenderer();
      let webglCanvas = document.getElementById("canvas");
      let width = maxX * config.nodeSize;
      let height = maxY * config.nodeSize;
      let turfPolygons = [];
      polygonsArr.forEach((polygonArr) => {
        if(polygonArr.length){
          turfPolygons.push([...polygonArr, polygonArr[0]]);
        }
      });
      let dissolvedPolygons = [];
      let totalCores = navigator.hardwareConcurrency || 4;
      let chunkSize = Math.ceil(turfPolygons.length/100);
      let chunkedTurfPolygons = new Array(Math.ceil(turfPolygons.length / chunkSize)).fill().map((_,i) => turfPolygons.slice(i*chunkSize,i*chunkSize+chunkSize))
      let workers = {};
      let promises = [];
      chunkedTurfPolygons.forEach((chunkedTurfPolygon, index) => {
        let promise = new Promise((resolve, reject) => {
          workers[index] = new Worker("data:application/x-javascript;base64,b25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7CiAgaW1wb3J0U2NyaXB0cyhldnQuZGF0YS5zY3JpcHRVcmwpOwogIHBvc3RNZXNzYWdlKG1haW4oZXZ0LmRhdGEucGFyYW1zKSk7Cn07Cg==");
          workers[index].postMessage({scriptUrl: "file:///Users/krnbatta/Projects/monash/intern/pathfinder/js/workers/dissolvePolygon.js", params: {turfPolygons: chunkedTurfPolygon, scriptUrl: "file:///Users/krnbatta/Projects/monash/intern/pathfinder/vendor/js/turf.min.js"}});
          workers[index].onmessage = function(event){
            resolve(event.data);
            workers[index].terminate();
          }
        });
        promises.push(promise);
      });
      Promise.all(promises).then((res) => {
        res.forEach((c, index) => {
          let x = c.map((r) => r[0].slice(0, r[0].length - 1));
          this.paintCanvas(index, width, height, x, "fill");
        });
        // let chunkSize = Math.ceil(polygonsArr.length/totalCores);
        // let chunks = new Array(Math.ceil(polygonsArr.length / chunkSize)).fill().map((_,i) => polygonsArr.slice(i*chunkSize,i*chunkSize+chunkSize));
        // chunks.forEach((chunk, index) => {
        //   this.paintCanvas(-index, width, height, chunk, "stroke");
        // });
      });
    });
  }
}
