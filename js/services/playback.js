import config from '../config'

class Playback {
  constructor(list) {
    this.list = list;
    this.reset();
  }
  pause(callback) {
    this.state = 'PAUSED';
  }
  resume() {
    this.state = 'RUNNING';
    this.run();
  }
  reset() {
    this.state = 'STOPPED';
    this.currentIndex = 0;
    this.speed = config.defaultSpeed;
  }
  start() {
    this.state = 'RUNNING';
    this.resume();
  }
  run() {
    (function loop() {
      if(!this.state=='RUNNING'){
        return;
      }
      this.list[this.currentIndex].play();
      this.currentIndex++;
      if(this.finished){
        this.state = 'FINISHED';
      }
      else{
        setTimeout(loop, this.interval);
      }
    })();
  }
  stepNext(){
    this.goto(this.currentIndex + 1);
  }
  stepBefore(){
    this.goto(this.currentIndex - 1);
  }
  goto(index) {
    this.currentIndex = index;
    this.list[index].timeTravel();
  }
  get finished(){
    return this.list.length == this.currentIndex;
  }
  get interval(){
    return 1000/this.speed;
  }
}
