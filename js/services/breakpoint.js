export default{
  bps: [],
  bpFActive: true,
  bpGActive: true,
  get bpApplied(){
    return !!this.bps.length;
  },
  check(node){
    return this.manualCheck(node, this.bpApplied, this.bps) + this.automaticCheck(node);
  },
  manualCheck(node, bpApplied, bps){
    let message = ``;
    let valid = true;
    if(bpApplied){
      for(let i=0; i<this.bps.length; i++){
        let bp = this.bps[i];
        let compareVal = node[bp.operand];
        switch (bp.operator) {
          case "less than":
            valid = compareVal < parseInt(bp.val) ? false : true;
            break;
          case "equal to":
            valid = compareVal == parseInt(bp.val) ? false : true;
            break;
          case "greater than":
            valid = compareVal > parseInt(bp.val) ? false : true;
            break;
        }
        if(!valid){
          message += `The value of ${bp.operand} for the current node is ${compareVal} which is ${bp.operator} the breakpoint value i.e. ${bp.val} <br>`;
        }
      }
    }
    return message;
  },
  automaticCheck(node){
    let message = ``;
    if(this.bpGActive && !node.gValid){
      message += `The g value of current node(${node.g}) being expanded is less than that of its parent(${node.parentNode.g}). This indicates that a negative cost cycle might exist in the graph and is certainly an error. <br>`;
    }
    if(this.bpFActive && !node.fValid){
      message += `The f value of current node(${node.f}) being expanded is less than that of its parent(${node.parentNode.f}). This indicates an inadmissible heuristic function and might be an error. <br>`;
    }
    return message;
  },
  monotinicF(state){
    this.bpFActive = state;
  },
  monotinicG(state){
    this.bpGActive = state;
  }
}
