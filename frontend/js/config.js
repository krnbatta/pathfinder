const config = {
  clientAddr: "http://localhost:8000",
  serverAddr: "http://localhost:8000",
  processGridUrl: "http://localhost:8000/processGrid",
  processMeshUrl: "http://localhost:8000/processMesh",
  processRoadNetworkUrl: "http://localhost:8000/processRoadNetwork",
  zooming: true,
  operationsPerSecond: 300,
  lineColor: 0x00DD00,
  wallColor: 0xD3D3D3,
  pathColor: 0xFFFFFF,
  borderColor: 0x000000,
  borderWidth: 0.1,
  nodeSize: 20,
  roadNetworkScale: 0.005,
  nodeAttrs: {
    source: {
      fillColor: 0x00DD00,
      lightColor: 0x70FF70,
      darkColor: 0x008400,
      frontierColor: 0x00C300
    },
    destination: {
      fillColor: 0xE40E40,
      lightColor: 0xF67996,
      darkColor: 0x880826,
      frontierColor: 0xE40C06
    },
    opened: {
      fillColor: 0x4363D8,
      lightColor: 0x889DE7,
      darkColor: 0x283B81,
      frontierColor: 0x435715
    },
    frontier: {
      fillColor: 0xFFE119,
      lightColor: 0xFFEC70,
      darkColor: 0x99870F,
      frontierColor: 0xFFC702
    },
    current: {
      fillColor: 0xF58231,
      lightColor: 0xF9AD77,
      darkColor: 0x934E1D,
      frontierColor: 0xF57305
    },
    closed: {
      fillColor: 0x911EB4,
      lightColor: 0xD385EA,
      darkColor: 0x57126C,
      frontierColor: 0x911A12
    }
  }
}

export default config;
