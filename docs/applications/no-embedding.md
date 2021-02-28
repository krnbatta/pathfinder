In some pathfinding settings the input map/graph may not have a direct embedding which complicates search trace visualisation. Such is the case for social network graphs where one might like to compute a distance between individuals. In other cases the search space may be too large to enumerate and load into memory. Such is the case for combinatorial domains including Sliding Tile Puzzle and Multi-agent Pathfinding.
Our system has the ability to address these kind of problems by computing a graph layout to position nodes from the event list. We consider two types of layouts: tree and network. Both are computed with D3. Our discussion in this example focuses on tree layouts, but the network case is similar. To visualise search trees we require the instrumented algorithm to implement the schema in Listing 4. important thing to note here is that user has to set the layout property to “tree”. The system uses this information to compute appropriate node positions. The result of this visualisation is shown in Figure 2(d).

```json
{
  "layout": "tree",
  "nodeStructure": [
    {
      "type": "circle",
      "variables": {
        "cx": "x",
        "cy": "y"
      },
      "persisted": true
    },
    {
      "type": "line",
      "variables": {
        "x1": "parent:x",
        "y1": "parent:y",
        "x2": "x",
        "y2": "y"
      },
      "persisted": true      
    }
  ],
  "eventList": [...]  
}
```
