import config from '../config';
import meshParser from '../utils/mesh-parser';
import MeshBuilder from '../utils/mesh-builder';

class Mesh {
  constructor(meshFile) {
    this._id = 0;
    this.meshFile = meshFile;
    this._meshData = null;
    this._meshPolygons = null;
  }

  get meshData(){
    if(!this._meshData){
      let that = this;
      this._meshData = new Promise((resolve, reject) => {
        try{
          meshParser(that.meshFile, (data) => {
            that.width = data.maxX * config.nodeSize;
            that.height = data.maxY * config.nodeSize;
            resolve(data);
          });
        }
        catch(e){
          reject(e);
        }
      });
    }
    return this._meshData;
  }

  get meshPolygons(){
    if(!this._meshNodes){
      this._meshPolygons = this.meshData.then((meshData) => {
        return new Promise((resolve, reject) => {
          MeshBuilder.build(meshData, resolve);
        });
      });
    }
    return this._meshPolygons;
  }
}

export default Mesh;
