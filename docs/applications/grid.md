Grid-based pathfinding is a popular topic which receives substantial attention from practitioners in computer game development [5]. In this domain the operating environment is discretised into tiles and the agent is allowed to move from one adjacent tile to the next. The nodeStructure property in our search trace schema includes support for a range of primitives including rectangles which can be used to represent tiles. Each tile can be coloured appropriately based on the type of node operation. Listing 9 shows an example of the schema.
For an example, we use an instrumented version of the WARTHOG pathfinding library which supports a variety of grid-based pathfinding techniques. The program instantiates the schema, inserting values for just two required variables: the x and y coordinates for each tile. Support for other (non-square) types of grids [2] can be added with extra primitives. Figure 1(A) shows the resulting visualisation for a simple A* search. Figure 2(a) shows the same problem being solved with Jump Point Search [13], a leading grid-based method whose implementation is also found in WARTHOG. Note that due to its extensible design the library is only instrumented once in order to produce both visualisations

```json
{
  "nodeStructure": [
    {
      "type": "rectangle",
      "variables": {
        "x": "x",
        "y": "y"
      },
      "persisted": true
    }
  ],
  "eventList": [...]
}
```
