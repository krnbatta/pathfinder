import StateMachine from "javascript-state-machine";
import Components from './components';

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
        console.log(arguments);
      },
      onBeforeNone() {
        console.log(`onBeforeNone => ${this.state}`);
        console.log(arguments);
      },
      onLeaveState() {
        console.log(`onLeaveState => ${this.state}`);
        console.log(arguments);
      },
      onLeaveNone() {
        console.log(`onLeaveNone => ${this.state}`);
        Components.forEach((component) => {
          component.init();
        });
        console.log(arguments);
      },
      onTransition() {
        console.log(`onTransition => ${this.state}`);
        console.log(arguments);
      },
      onEnterState() {
        console.log(`onEnterState => ${this.state}`);
        console.log(arguments);
      },
      onEnterReady() {
        console.log(`onEnterReady => ${this.state}`);
        console.log(arguments);
      },
      onAfterTransition() {
        console.log(`onAfterTransition => ${this.state}`);
        console.log(arguments);
      },
      onAfterInit() {
        console.log(`onAfterInit => ${this.state}`);
        console.log(arguments);
      }
    }
});
export default Controller;
