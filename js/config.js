const config = {
  clientAddr: "http://localhost:8001",
  serverAddr: "http://localhost:8000",
  processGridUrl: "http://localhost:8000/processGrid",
  processRoadNetworkUrl: "http://localhost:8000/processRoadNetwork",
  zooming: true,
  operationsPerSecond: 300,
  lineColor: 0x6B3838,
  wallColor: 0xD3D3D3,
  pathColor: 0xFFFFFF,
  borderColor: 0x000000,
  borderWidth: 0.1,
  nodeSize: 5,
  roadNetworkScale: 0.005,
  nodeAttrs: {
    source: {
      fillColor: 0x00DD00 //green :) 43
    },
    destination: {
      fillColor: 0xE40E40 //red :) 47
    },
    opened: {
      fillColor: 0xAFEEEE //blue :) 80
    },
    frontier: {
      fillColor: 0xFFFF00 //yellow :) 50
    },
    current: {
      fillColor: 0xFF6600 //orange :) 50
    },
    closed: {
      fillColor: 0x8800CC //violet :) 40
    }
  }
}

export default config;
