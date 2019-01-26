import config from '../config'

let rects = [];
let width = null;
let height = null;
let mapStr = null;

let mapBuilder = (mapData, callback) => {
  console.log(mapData);
  mapStr = mapData.mapStr;
  width = mapData.width;
  height = mapData.height;
  let tasks = [];
  for (let i = 0; i < width; ++i) {
    tasks.push(createRowTask(i));
  }
  Promise.all(tasks).then(() => {
    callback(rects.flat());
  });
}
let createRowTask = (rowId) => {
  return new Promise((resolve, reject) => {
    rects[rowId] = [];
    for (let colId = 0; colId < width; ++colId) {
      let x = colId * config.nodeSize;
      let y = rowId * config.nodeSize;
      let stringIndex = rowId * width + colId;
      let fillColor = config.pathColor;
      if (mapStr[stringIndex]=='@'){
        fillColor=config.wallColor;
      }
      let attrs = {
        x: x,
        y: y,
        width: config.nodeSize,
        height: config.nodeSize,
        fillStyle: fillColor,
        strokeStyle: config.borderColor,
      };
      rects[rowId].push(attrs);
    }
    resolve();
  });
};

export default mapBuilder;
