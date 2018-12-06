let Component = new StateMachine({
  init: 'none',
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
