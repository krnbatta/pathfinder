To visualise a wide range of pathfinding algorithms we rely on an input format format called search traces. Each trace is a text file, written in JSON format, that logs the execution history of a suitably instrumented pathfinding algorithm. There exists in the trace an event list that enumerates, in order, all node operations that occurred during the search process and the value of all associated node labels. We further store with each event additional drawing instructions and text metadata. These tell the visualiser how the node should be represented in the context of the problem being solved and the algorithmic technique being used to solve it. Listing 1 gives an example. Each trace requires three properties: eventList, nodeStructure, and layout. The purpose and contents of each are described below.

```json
{
  "layout": null,
  "nodeStructure": [
    {
      "type": "cell",
      "variables": { "x": "x", "y": "y" },
      "persisted": true
    }
  ],
  "eventList": [
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
