# Search Traces

This is a compulsory input to run the app. Download sample [here](https://pf-algo-viz.org/algorithms/astar.json).
The input format is JSON and it is essentially the logs of execution of the path finding algorithm. Additionally, it also has the information regarding drawing instructions for every overall algorithm visualisation and individual node. This information of algorithm execution in the form of events(corresponding to each node with its state-generating/updating/expanding) and its drawing instructions(shape/coordinates) enables the app to draw the algorithm trace in form of stream of snapshots. Following is an example of how the trace might look like:



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

Each search trace should have five properties: `eventList`, `nodeStructure`, `layout`, `stateExpansion`, and `stateStructure`.

1. `eventList`: The `eventList` is an array of objects each of which describes the state of a node at a particular stage in a search. Each object in this array is an `event object`.
    - Each node can be in one of these states: `generating`, `updating` or `expanding`. Other implicit states are `source` and `destination`. At any point in the search algorithm, the execution involves a single node and that node is either being created a fresh or having a change in state(if already created). For example: the node which is newly found by the algorithm is in generating phase. The node which is being expanded is in expanding phase. The node whose distances are being updated(as a result of shorter path found or any other criterion) is in updating phase. The node which is done expanding is in closing phase.
    - Along with the state(referred as `type` in the object), we have other minimal information associated with the node which is `id` which is a unique identifier of the node, `pId` which is id of its parent node(meaning that this node was created as a result of expansion of its parent node), its associated cost or g-value(`g`). Other data is node's estimated cost or h-value(`h`) and a bound on total cost, from start to target via the current node (`f`).
    - The information about visual representation of the node is provided using `variables` object. The information provided in this object is used to instantiate different drawing primitives. Here is an example of few cases:
      - For a node which is a point/square, we need their `x` and `y` values as coordinates for drawing a square or a cell. Example file: [here](https://pf-algo-viz.org/algorithms/astar.json)
      - For a node which is a circle, we need their `cx` and `cy` values as coordinates for drawing the circle.
      - For a line inside a node, we need `x1`, `y1`, `x2`, `y2` values as coordinates for drawing the line.
      - For drawing a polygon, we need array of flat coordinate points. Eg: {'points': ['x1', 'y1', 'x2', 'y2', ......, etc]}
      - We can also draw a complex node which is combination of all these nodes. Example of this can be Any angle path finding algorithms. Example file: [Anya](https://pf-algo-viz.org/algorithms/anya.json) and [Polyanya](https://pf-algo-viz.org/algorithms/polyanya.json)
    - The eventObject or ^^node^^ can also specify a metadata object which contains any extra information that we want to highlight about that event or node and we might be interested in looking at it through the visualiser.

2. `nodeStructure`: This application visualises the algorithm throughout its running history. It does this by visualising each step of the algorithm. Each step is nothing but either creation of a new node or change in state of existing one. So each step of the algorithm involves drawing or redrawing of the node. The node structural integrity i.e. its shape and size is assumed to be constant across all nodes(excluding zooming features). This information is provided inside `nodeStructure` property of the search trace. Please note that the drawing information eccentric to each node is present inside `variables` present in `eventObject` of `eventsList` array. So, essentially the `nodeStructure` is an array of `nodeStructureObj` objects that specifies the drawing instructions that describes how a node should be visualised in different states. The node can be either one of the primitives defined-cell, circle, line, polygon or it might be combination of these. Array contains just one object when the node consists of single primitive type(Cell example: here) or multiple objects in case of complex drawings involving multiple primitive types(Circle, Line and Polygon example: here). Each object inside the `nodeStructure` array may have the following properties:
    - `type`: This specifies primitive type can take these values for current implementation of the app: `rectangle`, `circle`, `line`, `polygon`.
    - `variables`: This is an object in which keys represents pre-defined primitive implicit variables used to draw them and values are the name of variables whose values are specified in the `variables` object inside the `eventsList`. Examples will make this more clear:
      - Consider the following listing. It shows how trace involving just cells or rectangles might look like:
      ```json
      {
        ...
        "nodeStructure": [
          {
            "type": "cell",
            "variables": { "x": "x", "y": "y" },
            "persisted": true
          }
        ],
        "eventList": [
          {
            ...
            "variables": { "x": 8, "y": 14 },
            ...
          },
          ...
        ]
      }      
      ```
      We know that for drawing a rectangle, we just need "x" and "y" coordinate. `{ "x": "x", "y": "y" }`. The keys here refer to pre-defined primitive implicit variables. The values which happen to be same as "x" and "y" will be keys inside the eventList variables. This listing will be similar to the following listing:
      ```json
      {
        ...
        "nodeStructure": [
          {
            "type": "cell",
            "variables": { "x": "a", "y": "b" },
            "persisted": true
          }
        ],
        "eventList": [
          ...
          {
            ...
            "variables": { "a": 8, "b": 14 },
            ...
          },
          ...
        ]
      }      
      ```
      - Let's have a look at a slightly complicated listing:
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
            ...
            "variables": { "cx": 8.0, "cy": 15.0, "y1": 15.0, "x1": 8.0, "y2": 15.0, "x2": 8.0 },
            ...
          },
          ...
        ]
      }      
      ```
      This is a slightly complicated node representation(Anya Node). It involves a circle, 3 lines and a polygon(triangle here for shading). Pre-defined primitives of circle, line and polygon are ("cx", "cy"), ("x1", "y1", "x2", "y2") and ("points": []). Please note the value of second line which is `{"x1": "cx", "y1": "cy", "x2": "x1", "y2": "y1"}`. This means that the two end points of this line are centre of the circle and first endpoint of the previous line. Similarly, third line(`{"x1": "cx", "y1": "cy", "x2": "x2", "y2": "y2"}`) has two end points as circle centre and second endpoint of the first line. The polygon(`{"points": ["x1", "y1", "x2", "y2", "cx", "cy"]}`) has 3 points which are: first endpoint of first line, second endpoint of second line and centre of circle. It can be seen that essentially we need value of `"cx", "cy", "x1", "y1", "x2", "y2"` to draw a node. So, as mentioned in the variables of one of the nodes in the `eventList`: `{ "cx": 8.0, "cy": 15.0, "y1": 15.0, "x1": 8.0, "y2": 15.0, "x2": 8.0 }`, this information should be sufficient to draw that node.
    - `persisted`: This property gives a lot of flexibility in representing a node. Essentially, this specifies whether the node sub-graphical part is to be shown at all times post its drawing event or it should be hidden. For example in simple grid search algorithm(in which nodeStructure is a rectangle with "x" and "y" values). The `persisted` property set to `true` would mean that the nodes or rectangles(representation of nodes) would be displayed while whole search is running. This property is much useful for a bit complicated representations such as any angle path finding algorithms. The Polyanya requires a circle and a triangle(bordered by 3 lines), but we want to see the triangle(which represents the next visible area) to be displayed only while node generation and not after that. So, we set the `persisted` property of all(3 lines and polygon) but circle as `false`. Having `persisted` property of only circle as `true` means that the circle of each node would displayed during the entirety of search.
    - `drawPath`: This property is set on each node sub-object. Please note that only one of the objects can have this set as `true` and all other objects have to have this property as `false`. Also one object must have this property as `true`. This is normally a circle or a rectangle. This would mean that if we want to represent path between 2 nodes we would draw line between respective circles or rectangles.
    - Other graphical properties such as fill, stroke, width, etc are not specified in this file. These values are picked up from configuration specified in the app. This freedom can be given to the user in the form of interface but this work is yet to be implemented. For now, following are the default configurations:
    ```json
      "lineColor": "0x00DD00",
      "wallColor": "0xD3D3D3",
      "pathColor": "0xFFFFFF",
      "borderColor": "0x000000",
      "borderWidth": 0.1,
      "nodeSize": 20,
      "roadNetworkScale": 0.005,
      "nodeAttrs": {
        "source": {
          "fillColor": "0x00DD00",
          "lightColor": "0x70FF70"
        },
        "destination": {
          "fillColor": "0xE40E40",
          "lightColor": "0xF67996"
        },
        "opened": {
          "fillColor": "0x4363D8",
          "lightColor": "0x889DE7"
        },
        "frontier": {
          "fillColor": "0xFFE119",
          "lightColor": "0xFFEC70"
        },
        "current": {
          "fillColor": "0xF58231",
          "lightColor": "0xF9AD77"
        },
        "closed": {
          "fillColor": "0x911EB4",
          "lightColor": "0xD385EA"
        }
    ```

3.  `layout`: The pathfinding algorithm might have positions fixed for each node(such as X-Y coordinates) but it is also possible that the algorithm is trying to solve a problem which doesn't have a 2D embedding. Example can be an abstract network which doesn't have any layout or embedding on 2D plane. To visualise the algorithm, we need to have positions of nodes where they are required to be drawn. The `layout` property addresses this problem. It can take 3 values: `null`, `"tree"` or `"network"`. Each of these values specify what approach we have to take to compute positions to draw these nodes. If `layout` is set to some value other than `null`, it requires pre-processing of entire search trace to build network of nodes with edges based on their relation with other nodes.

4. `stateExpansion`: This is a `boolean` value which is defauted to `false`. It is possible that our search algorithm is but an abstraction of the original problem that we are trying to solve. In this case, each node is nothing but a state representation of the original problem at some point in time. In this case, the value of `stateExpansion` is set to `true`. The `layout` is normally a `tree` in general with each node being just a circle joined with other nodes with lines. This property also requires `stateStructure` to be specified if set to `true`.

5. `stateStructure`: Similar to `nodeStructure`, this property holds the information about the graphical representation of state that is bound by the node. This assumes that the state is drawn using SVG inside the draggable resizable box on the screen. This follows its own semantic and has been implemented for tile puzzle solver and multi agent path finding problem so far. The system is highly customisable to accommodate other state representations in the future.
