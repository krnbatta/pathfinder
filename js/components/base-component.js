import StateMachine from "javascript-state-machine";

let BaseComponent = new StateMachine({
  tranisitions: [
    {
      name: 'init',
      from: 'none',
      to: 'ready'
    },
    {
      name: 'render',
      from: 'ready',
      to: 'rendered'
    }
  ]
});
export default BaseComponent;
