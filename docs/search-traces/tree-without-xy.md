# Tree without X-Y

Following is an example of how a pathfinding algorithm's search trace might look like when we have a tree layout without x and y values:

```json
{
  "layout": "tree",
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
      "f": 32
    },
    ...
  ]
}
```

The details about explanation can be found [here](https://krnbatta.github.io/pathfinder/#/search-traces/). Note here that we have `layout` value as "tree" and we didn't specify value of variables inside the node or event. The reason we specify `x` and `y` inside the `nodeStructure` is because we want to guide how the structure for the node would look like and these values are applied from the computed variable values by the app internally.
