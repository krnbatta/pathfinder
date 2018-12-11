import StateMachine from "javascript-state-machine";
window.StateMachine = StateMachine;
let Controller = new StateMachine({
  transitions: [{
        name: 'init',
        from: 'none',
        to: 'ready'
      },
      {
        name: 'start',
        from: 'ready',
        to: 'starting'
      },
      {
        name: 'search',
        from: 'starting',
        to: 'searching'
      },
      {
        name: 'pause',
        from: 'searching',
        to: 'paused'
      },
      {
        name: 'resume',
        from: 'paused',
        to: 'searching'
      },
      {
        name: 'reset',
        from: '*',
        to: 'ready'
      }
    ],
    methods: {
      onBeforeTransition() {
        console.log(`onBeforeTransition => ${this.state}`);
      },
      onBeforeNone() {
        console.log(`onBeforeNone => ${this.state}`);
      },
      onLeaveState() {
        console.log(`onLeaveState => ${this.state}`);
      },
      onLeaveNone() {
        console.log(`onLeaveNone => ${this.state}`);
      },
      onTransition() {
        console.log(`onTransition => ${this.state}`);
      },
      onEnterState() {
        console.log(`onEnterState => ${this.state}`);
      },
      onEnterReady() {
        console.log(`onEnterReady => ${this.state}`);
      },
      onAfterTransition() {
        console.log(`onAfterTransition => ${this.state}`);
      },
      onAfterInit() {
        console.log(`onAfterInit => ${this.state}`);
      }
    }
});
export default Controller;
