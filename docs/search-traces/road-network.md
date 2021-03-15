# Road Network

Following is an example of how a road network based pathfinding algorithm's search trace might look like:
```json
{
  "layout": null,
  "stateExpansion": false,
  "stateStructure": null,
  "nodeStructure": [
    {
      "type": "circle",
      "variables": {"cx": "x", "cy": "y"},
      "persisted": true,
      "drawPath": true
    },
    {
      "type": "line",
      "variables": {"x1": "parent:x", "y1": "parent:y", "x2": "x", "y2": "y"},
      "persisted": true
    }
  ],
  "eventList": [
    ...
    {
      "type": "expanding",
      "id": "1640",
      "pId": "1736",
      "g": 5,
      "f": 32,
      "variables": { "x": -73533430, "y": 41103106 },
    },
    ...
  ]
}
```

The details about explanation can be found [here](https://krnbatta.github.io/pathfinder/#/search-traces/).
