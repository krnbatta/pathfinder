import ProgressBarService from './progress-bar';

export default {
  processGrid(gridObj) {
    ProgressBarService.progress = 1;
    const fileName = gridObj.fileName;
    const height = gridObj.height;
    const width = gridObj.width;
    const gridStr = gridObj.gridStr;

    const canvas = document.createElement("canvas");
    canvas.width = width * 16;
    canvas.height = height * 16;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";

    let progressInterval = height/12;
    let progressSnaps = Array.from(Array(12).keys()).map((e) => e*progressInterval);

    for (let y = 0; y <= height; y++) {
      for (var x = 0; x <= width; x++) {
        var stringIndex = y * width + x;
        if (gridStr[stringIndex] == '@') {
          ctx.fillRect(x * 16, y * 16, 16, 16);
        }
      }
      if(progressSnaps.indexOf(y) != -1){
        ProgressBarService.progress = (progressSnaps.indexOf(y) + 1) * 5;
      }
    }
    ProgressBarService.progress = 60;
    ctx.fillStyle = "green";

    for (var y = 0; y <= height; y++) {
      for (var x = 0; x <= width; x++) {
        var stringIndex = y * width + x;
        if (gridStr[stringIndex] == 'T') {
          ctx.fillRect(x * 16, y * 16, 16, 16);
        }
      }
    }
    ProgressBarService.progress = 80;
    for (var i = 0; i <= width; i++) {
      let x1, x2, y1, y2;
      x1 = i * 16;
      x2 = i * 16;
      y1 = 0;
      y2 = height * 16;
      if (i == 0) {
        x1 += 1;
        x2 += 1;
      }
      if (i == width) {
        x1 -= 1;
        x2 -= 1;
      }
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ProgressBarService.progress = 90;
    for (var i = 0; i <= height; i++) {
      let x1, x2, y1, y2;
      y1 = i * 16;
      y2 = i * 16;
      x1 = 0;
      x2 = width * 16;
      if (i == 0) {
        y1 += 1;
        y2 += 1;
      }
      if (i == height) {
        y1 -= 1;
        y2 -= 1;
      }
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ProgressBarService.progress = 100;
    //check if there is better export image
    //check image quality
    let img = canvas.toDataURL();
    let link = document.createElement("a");
    link.download = `${fileName}.png`;
    link.href = img;
    link.click();
  },
  processRoadNetwork(roadnetworkObj) {
    const coData = roadnetworkObj.coData;
    const grData = roadnetworkObj.grData;
    const fileName = roadnetworkObj.fileName;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext('2d');

    canvas.width = coData.maxX * 0.01 + 1;
    canvas.height = coData.maxY * 0.01 + 1;
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    coData.coordinates.forEach((p) => {
      context.beginPath();
      context.arc(p.x*0.01, p.y*0.01, 1, 0, 2 * Math.PI);
      context.fill();
    });

    grData.lines.forEach((l) => {
      let from = coData.coordinates[l[0]];
      let to = coData.coordinates[l[1]];
      context.beginPath();
      context.moveTo(from.x * 0.01, from.y * 0.01);
      context.lineTo(to.x * 0.01, to.y * 0.01);
      context.lineWidth = 0.5;
      context.stroke();
    });

    let img = canvas.toDataURL();
    let link = document.createElement("a");
    a.download = `${fileName}.png`;
  }
}
