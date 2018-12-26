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
    let tmp = document.createElement("div");
    let svg = document.createElementNS(config.xmlns, "svg");
    svg.setAttributeNS(null, "width", config.nodeSize*width);
    svg.setAttributeNS(null, "height", config.nodeSize*height);
    rects.flat().forEach((rect) => {
      svg.appendChild(rect);
    });
    tmp.append(svg);
    let domString = tmp.innerHTML;
    callback(domString);
  });
}
let createRowTask = (rowId) => {
  return new Promise((resolve, reject) => {
    rects[rowId] = [];
    for (let colId = 0; colId < width; ++colId) {
      let x = colId * config.nodeSize;
      let y = rowId * config.nodeSize;
      let stringIndex = rowId * width + colId;
      let fillColor = 'white';
      if (mapStr[stringIndex]=='@'){
        fillColor='grey';
      }
      let elem = document.createElementNS(config.xmlns, "rect");

      elem.setAttributeNS(null, "x", x);
      elem.setAttributeNS(null, "y", y);
      elem.setAttributeNS(null, "width", config.nodeSize);
      elem.setAttributeNS(null, "height", config.nodeSize);
      elem.setAttributeNS(null, "fill", fillColor);
      elem.setAttributeNS(null, "stroke", "black");
      elem.setAttributeNS(null, "stroke-width", 0.1);
      rects[rowId].push(elem);
    }
    resolve();
  });
};

export default mapBuilder;
