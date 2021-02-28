A navigation mesh is a pathfinding data structure that divides the op- erating environment into convex polygons. When moving on a mesh the agent is free to enter and exit each polygon at any angle. In other words, the search space is continuous, unlike grids or graphs where agents can only move from one fixed point to another. Polyanya [6] is a recent and state-of-the-art algorithm for solving such problems. Although Polyanya instantiates the A* algorithm it uses a specialised and domain-specific representation where each node is a tuple (I,r) where r is the last turning point on a path from the start location and I = [a, b] is a contiguous interval of points from a polygon edge such that every point p ∈ I is visible from r.
To visualise Polyanya we employ a composite object comprising a circle primitive (representing r) and a polygon primitive formed by the points a, b and r. The polygon communicates the set of points visible from r through which a an optimal path needs to pass on the way to the target. When instrumenting the algorithm5 we instantiate Listing 16 which requires specifying only three sets of x and y coordinates. The result of our visualisation is shown in Figure 2(c).

```json
{
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
      "type": "polygon",
      "variables": {
        "points": ["x1", "y1", "x2", "y2", "x", "y"]
      }
    }
  ],
  "eventList": [...]  
}
```
