const express = require('express');
const {
  createCanvas
} = require('canvas');
const app = express();
const fs = require('fs');
const sys = require('sys');
const cors = require('cors');
const fse = require('fs-extra');

app.use(cors({
  origin: 'http://localhost:8000'
}));

app.use(express.urlencoded({
  limit: '24mb',
  extended: true,
  parameterLimit: 50000
}));

app.use(express.json({
  limit: '24mb'
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (red, res) => {
  res.sendFile(__dirname + '/style.css');
});

app.get('/docs', (req, res) => {
  res.redirect('https://krnbatta.github.io/pathfinder/#/');
});

app.get('/debugger', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
});

app.post("/debugger", (req, res) => {
  const data = req.body;
  let coFile, grFile, gridFile, meshFile, traceFile;
  switch (data['mapType']) {
    case "roadnetwork":
      coFile = `frontend/maps/roadnetwork/${data['roadnetworkFileName']}/${data['coFileName']}`;
      grFile = `frontend/maps/roadnetwork/${data['roadnetworkFileName']}/${data['grFileName']}`;
      traceFile = `frontend/algorithms/${data['traceFileName']}`;
      fse.outputFileSync(coFile, data['co']);
      fse.outputFileSync(grFile, data['gr']);
      fse.outputFileSync(traceFile, data['trace']);
      res.sendFile(__dirname + `/frontend/index.html?mapType=roadnetwork&coFile=${data['coFileName']}&grFile=${data['grFileName']}&traceFile=${data['traceFileName']}`);
      break;
    case "grid":
      gridFile = `frontend/maps/grid/${data['gridFileName']}`;
      traceFile = `frontend/algorithms/${data['traceFileName']}`;
      fse.outputFileSync(gridFile, data['grid']);
      fse.outputFileSync(traceFile, data['trace']);
      fse.outputFileSync('frontend/files.js', `window.mapType="grid";\nwindow.gridFile="${gridFile}";\nwindow.traceFile="${traceFile}";\n`);
      res.sendFile(__dirname + `/frontend/index.html`);
      break;
    case "mesh":
      meshFile = `frontend/maps/grid/${data['meshFileName']}`;
      traceFile = `frontend/algorithms/${data['traceFileName']}`;
      fse.outputFileSync(meshFile, data['mesh']);
      fse.outputFileSync(traceFile, data['trace']);
      res.sendFile(__dirname + `/frontend/index.html?mapType=mesh&meshFile=${data['meshFileName']}&traceFile=${data['traceFileName']}`);
      break;
    default:
      traceFile = `frontend/algorithms/${data['traceFileName']}`;
      fse.outputFileSync(traceFile, data['trace']);
      res.sendFile(__dirname + `/frontend/index.html?traceFile=${data['traceFileName']}`);
  }
});

app.get("/maps/:map", (req, res) => {
  res.sendFile(__dirname + `/frontend/maps/images/${req.params.map}.png`);
});

app.get("/files.js", (req, res) => {
  res.sendFile(__dirname + '/frontend/files.js');
});

app.get("/canvas-svg.js", (req, res) => {
  res.sendFile(__dirname + '/frontend/canvas-svg.js');
});

app.get("/dist/:file", (req, res) => {
  res.sendFile(__dirname + `/frontend/dist/${req.params.file}`);
});

app.get("/images/:image_file", (req, res) => {
  res.sendFile(__dirname + `/frontend/images/${req.params.image_file}`);
});

app.post('/processRoadNetwork', (req, res) => {
  const coData = req.body.coData;
  const grData = req.body.grData;
  const canvas = createCanvas();
  const context = canvas.getContext('2d');
  // context.imageSmoothingEnabled = true;
  canvas.width = coData.maxX * 0.01 + 1;
  canvas.height = coData.maxY * 0.01 + 1;
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.strokeStyle = 'black';
  coData.coordinates.forEach((p) => {
    context.beginPath();
    context.arc(p.x * 0.01, p.y * 0.01, 1, 0, 2 * Math.PI);
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
  let data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = Buffer.from(data, 'base64');
  fs.writeFile(`frontend/maps/images/ny.png`, buf, function(err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send({
        done: true
      });
    }
  });
});

app.post('/processMesh', (req, res) => {

});

app.post('/processGrid', (req, res) => {
  const fileName = req.body.fileName;
  const height = req.body.height;
  const width = req.body.width;
  const gridStr = req.body.gridStr;

  const canvas = createCanvas();
  canvas.width = width * 16;
  canvas.height = height * 16;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";

  for (let y = 0; y <= height; y++) {
    for (var x = 0; x <= width; x++) {
      var stringIndex = y * width + x;
      if (gridStr[stringIndex] == '@') {
        ctx.fillRect(x * 16, y * 16, 16, 16);
      }
    }
  }

  ctx.fillStyle = "green";

  for (var y = 0; y <= height; y++) {
    for (var x = 0; x <= width; x++) {
      var stringIndex = y * width + x;
      if (gridStr[stringIndex] == 'T') {
        ctx.fillRect(x * 16, y * 16, 16, 16);
      }
    }
  }

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

  //check if there is better export image
  //check image quality
  let img = canvas.toDataURL();
  let data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = Buffer.from(data, 'base64');
  fs.writeFile(`frontend/maps/images/${fileName}.png`, buf, function(err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send({
        done: true
      });
    }
  });

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
