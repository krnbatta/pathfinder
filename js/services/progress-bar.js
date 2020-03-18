export default {
  promise: null,
  resolve: null,
  reject: null,
  elem: null,
  init(resolveCallback, rejectCallback){
    this.elem = this.createProgressElement();
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    this.promise.then(() => {
      if(resolveCallback){
        resolveCallback();
      }
    }, () => {
      if(rejectCallback){
        rejectCallback();
      }
    }).finally(() => {
      this.clearValues();
    });
    return this.elem;
  },
  createProgressElement(){
    let progress = document.createElement("div");
    progress.id = "progress";
    let bar = document.createElement("div");
    bar.id = "bar";
    progress.appendChild(bar);
    return progress;
  },
  set progress(p){
    if (p > 100) {
      this.resolve();
    } else {
      this.elem.style.width = p + "%";
      this.elem.innerHTML = p + "%";
    }
  },
  clearValues(){
    this.elem.parentNode.removeChild(this.elem);
    this.elem = null;
    this.promise = null;
    this.resolve = null;
    this.reject = null;
  }
}
