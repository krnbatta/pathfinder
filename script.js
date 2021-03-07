window.addEventListener("DOMContentLoaded", () => {
  Element.prototype.setAttributes = function(obj){ for(var prop in obj) this.setAttribute(prop, obj[prop]) }
  let demos = [
    {mapType: "grid", mapName: "CSC2F", gridFile: "maps/grid/CSC2F.grid", traceName: "Astar", traceFile: "algorithms/astar.json"},
    {mapType: "grid", mapName: "The Frozen Sea", gridFile: "maps/grid/TheFrozenSea.grid", traceName: "Astar", traceFile: "algorithms/tfs-astar.json"},
    {mapType: "grid", mapName: "CSC2F", gridFile: "maps/grid/CSC2F.grid", traceName: "JPS", traceFile: "algorithms/jps.json"},
    {mapType: "grid", mapName: "CSC2F", gridFile: "maps/grid/CSC2F.grid", traceName: "Anya", traceFile: "algorithms/anya.json"},
    {mapType: "mesh", mapName: "Arena", meshFile: "maps/mesh/arena.mesh", traceName: "Polyanya", traceFile: "algorithms/polyanya.json"},
    {mapType: "mesh", mapName: "Aurora", meshFile: "maps/mesh/aurora.mesh", traceName: "Polyanya", traceFile: "algorithms/aurora-polyanya.json"},
    {mapType: "roadnetwork", mapName: "New York Street", coFile: "maps/roadnetwork/NY.co", grFile: "maps/roadnetwork/NY.gr", traceName: "Astar", traceFile: "algorithms/road-astar.json"},
    {mapType: "roadnetwork", mapName: "New York Street", coFile: "maps/roadnetwork/NY.co", grFile: "maps/roadnetwork/NY.gr", traceName: "Bi-directional Astar", traceFile: "algorithms/bi-road-astar.json"},
    {traceName: "JPS(Tree with X-Y)", traceFile: "algorithms/jps-tree-xy.json"},
    {traceName: "JPS(Tree without X-Y)", traceFile: "algorithms/jps-tree.json"},
    {traceName: "Tile Puzzle Solver", traceFile: "algorithms/tile.json"},
    {traceName: "Multi Agent Path Finder", traceFile: "algorithms/mapf.json"}
  ]
  let ul = document.getElementById("demo-list");
  demos.forEach((demo) => {
    let li = document.createElement("li");
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
    li.appendChild(form);
    ul.appendChild(li);
  });
});
