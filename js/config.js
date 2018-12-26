const config = {
  xmlns: "http://www.w3.org/2000/svg",
  operationsPerSecond: 300,
  nodeSize: 30,
  nodeAttrs: {
    source: {
      fillColor: '#0d0' //green :) 43
    },
    destination: {
      fillColor: '#e40' //red :) 47
    },
    opened: {
      fillColor: '#afeeee' //blue :) 80
    },
    frontier: {
      fillColor: '#ffff00' //yellow :) 50
    },
    current: {
      fillColor: '#ff6600' //orange :) 50
    },
    closed: {
      fillColor: '#8800cc' //violet :) 40
    }
  }
}

export default config;
