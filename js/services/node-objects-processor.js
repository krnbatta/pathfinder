import Store from './Store';

export default {
  process(node){
    return node.step.tracer.nodeStructure.map((obj) => {
      let nodeConf = JSON.parse(JSON.stringify(obj));
      delete nodeConf.variables;
      nodeConf.node = node;
      let coordinates = {};
      Object.keys(obj.variables).forEach((key) => {
        if(key=="points"){
          coordinates['points'] = [];
          obj.variables['points'].forEach((pt) => {
            coordinates['points'].push(node.variables[pt]);
          });
        }
        else{
          if(obj.variables[key].indexOf("parent:") == -1){
            coordinates[key] = node.variables[obj.variables[key]];
          }
          else{
            let parentNode = node.parentNode;
            let prop = obj.variables[key].split("parent:")[1];
            if(parentNode){
              coordinates[key] = parentNode.variables[prop];
            }
            else{
              coordinates[key] = node.variables[prop];
            }
          }

        }
      });
      let options = {nodeConf: nodeConf, coordinates: coordinates};
      switch (obj.type) {
        case "rectangle":
          return Store.createRecord('Rectangle', options);
        case "circle":
          return Store.createRecord('Circle', options);
        case "line":
          return Store.createRecord('Line', options);
        case "polygon":
          return Store.createRecord('Polygon', options);
      }
    });
  }
}
