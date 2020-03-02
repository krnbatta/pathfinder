import Store from './store';
import Controller from '../controller';
import GraphicsManager from '../services/graphics-manager';
import config from '../config';

export default {
  parser: {
    coParse(file, callback) {
      let coReader = new FileReader();

      coReader.addEventListener("load", function(event) {
        let textFile = event.target;
        const data = textFile.result.split(/\n|\r\n/);
        let coordinates = [];
        let minX, minY;
        let maxX, maxY;
        for (let line of data) {
          if (line[0] == 'v') {
            let vline = line.split(" ");
            let x = Number(vline[2]);
            let y = Number(vline[3]);
            if (!minX || minX > x) {
              minX = x;
            }
            if (!minY || minY > y) {
              minY = y;
            }
            if (!maxX || maxX < x) {
              maxX = x;
            }
            if (!maxY || maxY < y) {
              maxY = y;
            }
            coordinates.push({
              x,
              y
            });
          }
        }
        maxX -= minX;
        maxY -= minY;
        coordinates = coordinates.map((c) => {
          return {
            x: (c.x - minX),
            y: (c.y - minY)
          }
        });
        coordinates.unshift(-1);
        callback({
          maxX,
          maxY,
          minX,
          minY,
          coordinates
        });
      });

      coReader.readAsText(file);
    },
    grParse(file, callback) {
      let grReader = new FileReader();

      grReader.addEventListener("load", function(event) {
        let textFile = event.target;
        const data = textFile.result.split(/\n|\r\n/);
        let lines = [];
        for (let line of data) {
          if (line[0] == 'a') {
            let aline = line.split(" ");
            let from = aline[1];
            let to = aline[2];
            lines.push([from, to]);
          }
        }
        callback({
          lines
        });
      });

      grReader.readAsText(file);
    }
  },
  renderMap() {
    let roadNetwork = Store.find('RoadNetwork');
    roadNetwork.roadCoordinates.coData.then((coData) => {
      roadNetwork.roadGraph.grData.then((grData) => {
        Controller.setupRenderer();
        let mapSprite = new PIXI.Sprite.from(`${config.clientAddr}/maps/images/ny.png`);
        mapSprite.width = Controller.getDimensions().width;
        mapSprite.height = Controller.getDimensions().height;
        mapSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        mapSprite.texture.baseTexture.mipmap = true;
        GraphicsManager.insert(Controller, mapSprite);
      });
    });
  },
  sendToServer() {
    // this.renderMap();
    // return;
    let roadNetwork = Store.find('RoadNetwork');
    roadNetwork.roadCoordinates.coData.then((coData) => {
      roadNetwork.roadGraph.grData.then((grData) => {
        fetch(config.processRoadNetworkUrl, {
          method: "POST",
          body: JSON.stringify({
            coData: coData,
            grData: grData
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json()).then((data) => {
          if (data.done) {
            this.renderMap();
          }
        });
      });
    });
  },
  checkMap(){
    let map = Store.find("Map");
    var img = new Image();
    let self = this;
    img.onerror = function(){
      //send request to server
      self.sendToServer();
    }
    img.onload = function(){
      //load map from image directly
      self.renderMap();
      img = null;
    }
    img.src = `${config.clientAddr}/maps/images/ny.png`;
  },
  process() {
    this.checkMap();
    return;
    let roadNetwork = Store.find('RoadNetwork');
    let container = new PIXI.Container();
    roadNetwork.roadCoordinates.coData.then((coData) => {
      roadNetwork.roadGraph.grData.then((grData) => {
        Controller.setupRenderer();
        let point = new PIXI.Graphics();
        coData.coordinates.forEach((p) => {
          point.lineStyle(1, 0x000000);
          point.beginFill(0x000000);
          point.drawCircle(p.x * 0.01, p.y * 0.01, 0.5);
          point.endFill();
        });
        container.addChild(point);
        let line = new PIXI.Graphics();
        line.lineStyle(0.25, 0x000000);
        grData.lines.forEach((l) => {
          let from = coData.coordinates[l[0]];
          let to = coData.coordinates[l[1]];
          line.moveTo(from.x * 0.01, from.y * 0.01);
          line.lineTo(to.x * 0.01, to.y * 0.01);
        });
        container.addChild(line);
        GraphicsManager.insert(Controller, container);
      });
    });
  }
}
