const express = require('express');
const {
  createCanvas
} = require('canvas');
const app = express();
const fs = require('fs');
const sys = require('sys');
const cors = require('cors');
// const PIXI = require('pixi');
const {PIXI} = require('node-pixi');

app.use(cors({
  origin: 'http://localhost:8001'
}));

app.use(express.urlencoded({ limit: '24mb', extended: true, parameterLimit: 50000 }));

app.use(express.json({limit: '24mb'}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.sendFile(__dirname + '/frontend/index.html');
});

app.get("/dist/app.js", (req, res) => {
  res.sendFile(__dirname + '/frontend/dist/app.js');
});

app.get("/dist/app.css", (req, res) => {
  res.sendFile(__dirname + '/frontend/dist/app.css');
});

app.get("/images/favicon.jpg", (req, res) => {
  res.sendFile(__dirname + '/frontend/images/favicon.jpg');
});

app.get("/images/monash.png", (req, res) => {
  res.sendFile(__dirname + '/frontend/images/monash.png');
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
  let data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = Buffer.from(data, 'base64');
  fs.writeFile(`../pathfinder/maps/images/ny.png`, buf, function(err){
    if(err){
      console.log(err);
      res.send(err);
    }
    else{
      res.send({done: true});
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
  fs.writeFile(`../pathfinder/maps/images/${fileName}.png`, buf, function(err){
    if(err){
      console.log(err);
      res.send(err);
    }
    else{
      res.send({done: true});
    }
  });

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
