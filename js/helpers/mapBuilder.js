var xmlns = "http://www.w3.org/2000/svg";
var rects = [];
let mapBuilder = (mapData, callback) => {
    let tasks = [];
    for (let i = 0; i < numRows; ++i) {
        tasks.push(createRowTask(i, mapData[i]));
        tasks.push(sleep);
    }

    async.series(tasks, () => {
        let domString = rects.join("");
        callback(domString);
    });
}
let createRowTask = (rowId, mapRow) => {
    return (done) => {
        rects[rowId] = [];
        for (j = 0; j < numCols; ++j) {
            x = j * nodeSize;
            y = rowId * nodeSize;

            let elem = document.createElementNS(xmlns, "rect");

            elem.setAttributeNS(null, "x", x);
            elem.setAttributeNS(null, "y", y);
            elem.setAttributeNS(null, "width", nodeSize);
            elem.setAttributeNS(null, "height", nodeSize);
            elem.setAttributeNS(null, "fill", fillColor);
            rects[rowId].push(elem);
        }
        done('generating grid ' + Math.round((rowId + 1) / numRows * 100) + '%');
    };
};

sleep = (done) => {
    setTimeout(() => {
        done(null);
    }, 0);
};
