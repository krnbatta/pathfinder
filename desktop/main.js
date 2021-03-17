// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
const fs = require('fs');

const urls = [
  "https://pf-algo-viz.org"
]

const createWindow = () => {
  win = new BrowserWindow({
    center: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      show: false,
      webSecurity: false
    }
  });
  win.maximize();
  // win.webContents.openDevTools();
  //win.webContents.
  // var remote = require('electron').remote,
  // arguments = remote.getGlobal('sharedObject').prop1;
  // console.log(arguments)
  console.log(process.argv);
  let args = process.argv;
  let traceIndex;
  switch(args[2]){
    case "roadnetwork":
      traceIndex = 5;
      break;
    case "grid":
      traceIndex = 4;
      break;
    case "mesh":
      traceIndex = 4;
      break;
    default:
      traceIndex = 3;
  }
  let promises = [];
  for(let i=3; i<=traceIndex; i++){
    promises.push(new Promise((resolve, reject) => {
      fs.readFile(args[i], 'utf8', (err, file) => {
        resolve(file);
      });
    }));
  }
  let postStr;
  Promise.all(promises).then((files) => {
    if(args[4]){
      console.log(args[4].split("/").pop().split(".").shift());
    }
    switch(args[2]){
      case "roadnetwork":
        postStr = `mapType=roadnetwork&mapName=${args[3].split("/").pop().split(".").shift()}&co=${files[0]}&gr=${files[1]}&traceName=${args[5].split("/").pop().split(".").shift()}&trace=${files[2]}`;
        break;
      case "grid":
        postStr = `mapType=grid&mapName=${args[3].split("/").pop().split(".").shift()}&grid=${files[0]}&traceName=${args[4].split("/").pop().split(".").shift()}&trace=${files[1]}`;
        break;
      case "mesh":
        postStr = `mapType=mesh&mapName=${args[3].split("/").pop().split(".").shift()}&mesh=${files[0]}&traceName=${args[4].split("/").pop().split(".").shift()}&trace=${files[1]}`;
        break;
      default:
        postStr = `mapType=null&traceName=${args[3].split("/").pop().split(".").shift()}&trace=${files[0]}`;
    }
    // win.loadURL('https://pf-algo-viz.org/app', {
    win.loadURL('https://pf-algo-viz.org/app', {
      postData: [{
        type: 'rawData',
        bytes: Buffer.from(postStr)
      }],
      extraHeaders: 'Content-Type: application/x-www-form-urlencoded'
    });
  })

 // win.loadURL(url.format({
  //     pathname: path.join(__dirname,"index.html"),
  //     protocol: 'file',
  //     slashes: true
  // }));
  win.once('ready-to-show', () => {
    win.show()
  });

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
