window.addEventListener("DOMContentLoaded", () => {
  Element.prototype.setAttributes = function(obj){ for(var prop in obj) this.setAttribute(prop, obj[prop]) }
  let demos = [
    {mapType: "grid", mapName: "CSC2F", gridFile: "maps/grid/CSC2F.grid", traceName: "Astar", traceFile: "algorithms/astar.json", htmlId: "csc2f-astar"},
    {mapType: "grid", mapName: "The Frozen Sea", gridFile: "maps/grid/TheFrozenSea.grid", traceName: "Astar", traceFile: "algorithms/tfs-astar.json", htmlId: "tfs-astar"},
    {mapType: "grid", mapName: "CSC2F", gridFile: "maps/grid/CSC2F.grid", traceName: "JPS", traceFile: "algorithms/jps.json", htmlId: "csc2f-jps"},
    {mapType: "grid", mapName: "CSC2F", gridFile: "maps/grid/CSC2F.grid", traceName: "Anya", traceFile: "algorithms/anya.json", htmlId: "csc2f-anya"},
    {mapType: "mesh", mapName: "Arena", meshFile: "maps/mesh/arena.mesh", traceName: "Polyanya", traceFile: "algorithms/polyanya.json", htmlId: "arena-polyanya"},
    {mapType: "mesh", mapName: "Aurora", meshFile: "maps/mesh/aurora.mesh", traceName: "Polyanya", traceFile: "algorithms/aurora-polyanya.json", htmlId: "aurora-polyanya"},
    {mapType: "roadnetwork", mapName: "NY Street", coFile: "maps/roadnetwork/NY.co", grFile: "maps/roadnetwork/NY.gr", traceName: "Astar", traceFile: "algorithms/road-astar.json", htmlId: "ny-astar"},
    {mapType: "roadnetwork", mapName: "NY Street", coFile: "maps/roadnetwork/NY.co", grFile: "maps/roadnetwork/NY.gr", traceName: "Bi-directional Astar", traceFile: "algorithms/bi-road-astar.json", htmlId: "ny-bi-astar"},
    {traceName: "JPS(Tree with X-Y)", traceFile: "algorithms/jps-tree-xy.json", htmlId: "jps-xy"},
    {traceName: "JPS(Tree without X-Y)", traceFile: "algorithms/jps-tree.json", htmlId: "jps-no-xy"},
    {traceName: "Tile Puzzle Solver", traceFile: "algorithms/tile.json", htmlId: "tile-demo"},
    {traceName: "Multi Agent Path Finder", traceFile: "algorithms/mapf.json", htmlId: "mapf-demo"}
  ]
  setPlaceDemos(demos);
  setListDemos(demos);
});
function setPlaceDemos(demos){
  demos.forEach((demo) => {
    let elem = document.getElementById(demo.htmlId);
    if(elem){
      let form = createDemoForm(demo);
      elem.prepend(form);
    }
  });
}
function setListDemos(demos){
  let ul = document.getElementById("demo-list");
  demos.forEach((demo) => {
    let li = document.createElement("li");
    let form = createDemoForm(demo);
    li.appendChild(form);
    ul.appendChild(li);
  });
}

function createDemoForm(demo){
  let form = document.createElement("form");
  form.setAttributes({"action": "demo", "method": "POST"});
  for(let k in demo){
    let input = document.createElement("input");
    let attrs = {"type": "hidden", "name": k, "value": demo[k]};
    input.setAttributes(attrs);
    form.appendChild(input);
  }
  let span = document.createElement("span");
  if(demo.mapType){
    span.textContent = `Map Type: ${demo.mapType} | Map Name: ${demo.mapName} | Algorithm: ${demo.traceName} |`;
  }
  else{
    span.textContent = `Map Type: None | Algorithm: ${demo.traceName} |`;
  }
  let button = document.createElement("button");
  button.innerHTML = "link";
  form.appendChild(span);
  form.appendChild(button);
  return form;
}
