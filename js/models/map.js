import config from '../config';
import mapParser from '../utils/map-parser';
import mapBuilder from '../utils/map-builder';

class Map {
  constructor(mapFile) {
    this._id = 0;
    this.mapFile = mapFile;
    this._mapData = null;
    this._mapNodes = null;
    this.width = null;
    this.height = null;
  }

  get mapData(){
    if(!this._mapData){
      let that = this;
      this._mapData = new Promise((resolve, reject) => {
        try{
          mapParser(that.mapFile, (data) => {
            that.width = data.width * config.nodeSize;
            that.height = data.height * config.nodeSize;
            resolve(data);
          });
        }
        catch(e){
          reject(e);
        }
      });
    }
    return this._mapData;
  }

  get mapNodes(){
    if(!this._mapNodes){
      this._mapNodes = this.mapData.then((mapData) => {
        return new Promise((resolve, reject) => {
          mapBuilder.call(this, mapData, resolve);
        });
      });
    }
    return this._mapNodes;
  }
}

export default Map;
