class Map {
  constructor(mapFile) {
    this.mapfile = mapFile;
    this._mapStr = null;
    this._mapNodes = null;
  }

  get mapStr(){
    if(!this._mapStr){
      this._mapStr = new Promise((resolve, reject) => {
        try{
          mapParser(e.target.files[0], resolve);
        }
        catch(e){
          reject(e);
        }
      });
    }
    return this._mapStr;
  }

  get mapNodes(){
    if(!this._mapNodes){
      this._mapNodes = this.mapStr.then((str) => {
        return mapBuilder(mapdata);
      });
    }
  }
}
