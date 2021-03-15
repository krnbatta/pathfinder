# Grid

Following is an example of how a grid based pathfinding algorithm's search trace might look like:
```json
{
  "layout": null,
  "stateExpansion": false,
  "stateStructure": null,
  "nodeStructure": [
    {
      "type": "cell",
      "variables": { "x": "x", "y": "y" },
      "persisted": true
    }
  ],
  "eventList": [
    ...
    {
      "type": "expanding",
      "id": 1640,
      "pId": 1736,
      "g": 5,
      "f": 32,
      "variables": { "x": 8, "y": 14 },
      "metadata": { "tag": "1640 - first turning point, etc." }
    },
    ...
  ]
}
```

The details about explanation can be found [here](https://krnbatta.github.io/pathfinder/#/search-traces/).
