# Mesh

Following is an example of how a navigation mesh based pathfinding algorithm's search trace might look like:
```json
{
  ...
  "nodeStructure": [
    {"type": "circle", "variables": {"cx": "cx", "cy": "cy"}, "persisted": true, "drawPath": true},
    {"type": "line", "variables": {"x1": "x1", "y1": "y1", "x2": "x2", "y2": "y2"}, "persisted": false},
    {"type": "line", "variables": {"x1": "cx", "y1": "cy", "x2": "x1", "y2": "y1"}, "persisted": false},
    {"type": "line", "variables": {"x1": "cx", "y1": "cy", "x2": "x2", "y2": "y2"}, "persisted": false},
    {"type": "polygon", "variables": {"points": ["x1", "y1", "x2", "y2", "cx", "cy"]}, "persisted": false}
  ],
  "eventList": [
    ...
    {
      "type": "expanding",
      "id": 1640,
      "pId": 1736,
      "g": 5,
      "f": 32,
      "variables": { "cx": 8.0, "cy": 15.0, "y1": 15.0, "x1": 8.0, "y2": 15.0, "x2": 8.0 }
    },
    ...
  ]
}      
```

The details about explanation can be found [here](https://krnbatta.github.io/pathfinder/#/search-traces/).
