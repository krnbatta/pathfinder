const config = {
  renderType: 'canvas',
  xmlns: "http://www.w3.org/2000/svg",
  operationsPerSecond: 300,
  lineColor: 0xFFFFFF,
  nodeSize: 10,
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
