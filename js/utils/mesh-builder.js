import config from '../config'

let MeshBuilder = {
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
}

export default MeshBuilder;
