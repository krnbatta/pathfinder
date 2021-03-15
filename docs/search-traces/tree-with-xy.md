# Tree with X-Y

Following is an example of how a pathfinding algorithm's search trace might look like when we have a simple tree-structure with x and y values(Since x and y values are present, we don't need to specify layout value as tree):
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
      "variables": { "x": 18, "y": 9 },
    },
    ...
  ]
}
```

The details about explanation can be found [here](https://krnbatta.github.io/pathfinder/#/search-traces/).
