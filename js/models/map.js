import config from '../config';
import mapParser from '../utils/map-parser';
import svgMapBuilder from '../utils/svg/map-builder';
import canvasMapBuilder from '../utils/canvas/map-builder';

class Map {
  constructor(mapFile) {
    this.mapFile = mapFile;
    this._mapData = null;
    this._mapNodes = null;
  }

  get mapData(){
    if(!this._mapData){
      let that = this;
      this._mapData = new Promise((resolve, reject) => {
        try{
          mapParser(that.mapFile, resolve);
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
          if(config.renderType=='svg'){
            svgMapBuilder(mapData, resolve);
          }
          else{
            canvasMapBuilder(mapData, resolve);
          }
        });
      });
    }
    return this._mapNodes;
  }
}

export default Map;
