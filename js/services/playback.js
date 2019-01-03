import StateMachine from "javascript-state-machine";

let PlaybackService = new StateMachine({
  transitions: [{
        name: 'init',
        from: 'none',
        to: 'ready'
      },
      {
        name: 'play',
        from: ['ready', 'paused'],
        to: 'running'
      },
      {
        name: 'pause',
        from: 'running',
        to: 'paused'
      },
      {
        name: 'reset',
        from: '*',
        to: 'ready'
      }
    ],
    data: {
      initCallbacks: [],
      readyCallbacks: [],
      playCallbacks: [],
      pauseCallbacks: [],
      resetCallbacks: []
    },
    methods: {
      onInit(){
        this.runCallbacks('init');
      },
      onPlay(){
        this.runCallbacks('play');
      },
      onPause(){
        this.runCallbacks('pause');
      },
      onReset(){
        this.runCallbacks('reset');
      },
      runCallbacks(type){
        let callbacks;
        switch (type) {
          case "init":
            callbacks = this.initCallbacks;
            break;
          case "play":
            callbacks = this.playCallbacks;
            break;
          case "pause":
            callbacks = this.pauseCallbacks;
            break;
          case "reset":
            callbacks = this.resetCallbacks;
            break;
        }
        callbacks.forEach((callback) => {
          callback();
        });
      },
      addCallback(type, callback){
        switch (type) {
          case "init":
            this.initCallbacks.push(callback);
            break;
          case "play":
            this.playCallbacks.push(callback);
            break;
          case "pause":
            this.pauseCallbacks.push(callback);
            break;
          case "reset":
            this.resetCallbacks.push(callback);
            break;
        }
      }
    }
});
export default PlaybackService;
