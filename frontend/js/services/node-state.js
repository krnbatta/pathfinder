import $ from "jquery";

export default {
  init(stateStructure){
    this.vars = stateStructure.vars;
    this.svg = stateStructure.svg;
  },
  process(state_variables){
    this.setStateVariables(state_variables);
    this.node = this.createNode(this.svg);
    let wrapper = this.htmlWrapper();
    let mainPanel = document.getElementById("main-panel");
    mainPanel.appendChild(wrapper);
    // $("#node-state").draggable({});
  },
  setStateVariables(state_variables){
    let valVariables = state_variables.val;
    let refVariables = state_variables.ref;
    this.state_vars = JSON.parse(JSON.stringify(this.vars));
    for(const [k, v] of Object.entries(valVariables)){
      this.state_vars[k] = v;
    }
    for(const [k, v] of Object.entries(refVariables)){
      this.state_vars[k] = this.state_vars[v];
    }
  },
  createNode(obj){
    let type = obj.type;
    let props = obj.props;
    let children = obj.children;
    let node = document.createElementNS(this.vars.xlmns, type);
    if(type == "text"){
      node.textContent = this.state_vars[obj.value];
    }
    for(const [k, v] of Object.entries(props)){
      let val = this.state_vars[v];
      node.setAttributeNS(null, k, val);
    }
    children.forEach((child) => {
      node.appendChild(this.createNode(child));
    });
    return node;
  },
  htmlWrapper(){
    let wrapper = document.createElement("div");
    wrapper.id = "node-state";
    wrapper.style.position = "absolute";
    wrapper.style.width = "200px";
    wrapper.style.height = "200px";
    wrapper.style.top = "20px";
    wrapper.style.left = "0px";
    wrapper.setAttribute("draggable", "true");
    wrapper.appendChild(this.node);
    return wrapper;
  },

}
