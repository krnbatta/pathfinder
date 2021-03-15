# Bi-directional Search

Following is an example of how a bi-directional pathfinding algorithm's search trace might look like:
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
      "id": "f-1640",
      "pId": "f-1736",
      "g": 5,
      "f": 32,
      "variables": { "x": 8, "y": 14 }    
    },
    ...
    {
      "type": "updating",
      "id": "b-1211",
      "pId": "b-1293",
      "g": 6,
      "f": 33,
      "variables": { "x": 29, "y": 23 }
    },
    ...
  ]
}
```

The details about explanation can be found [here](https://krnbatta.github.io/pathfinder/#/search-traces/). Regarding the `id` and `pId` of the nodes, we append additional information to convey which source it came from. In the example above, we can see that, we appended "f" or "b" to the `id` and `pId` of the nodes depending upon whether it started from "front" or "back" respectively.


Also note that in the given example, we have value of `x1` and `y1` in `line` type of `nodeStructure` as `parent:x` and `parent:y` respectively. This means that the other end of the line is the `x` and `y` value of the parent.
