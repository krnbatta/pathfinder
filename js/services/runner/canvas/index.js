export default function(steps) {
    let startTime = new Date();
    let canvas = this.tracer.canvas;
    let ctx = canvas.getContext('2d');
    let totalSteps = Object.keys(steps).length;
    let runner = ((id) => {
        if (id >= totalSteps) {
            let endTime = new Date();
            alert(endTime - startTime);
            return;
        }
        let attrs = steps[id].node.domElement;
        ctx.fillStyle = attrs.fillStyle;
        ctx.strokeStyle = attrs.strokeStyle;
        ctx.fillRect(attrs.x, attrs.y, attrs.width, attrs.height);
        ctx.strokeRect(attrs.x, attrs.y, attrs.width, attrs.height);
        window.requestAnimationFrame(runner.bind(this, ++id));
    });
    window.requestAnimationFrame(runner.bind(this, 1));
}
