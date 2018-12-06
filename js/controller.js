let Controller = new StateMachine({
    init: 'none',
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
    ]
});
