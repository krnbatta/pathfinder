# Multi-agent Path Finding

In Multi-agent Path Finding problem or MAPF, we have group of agents who are meant to go from their current locations to destination locations set for each agent differently. Our goal is to compute path for each agent such that they are free of collisions. This kind of problem has variety of applications in the field of warehouse systems and gaming. Read [MAPF](http://mapf.info/) for more information.

Now the path for these agents or robots can have obstructions like any pathfinding algorithm in the context of grid maps. But it is important to note that in MAPF, we are trying to compute multiple paths instead of a single path and we are moving in the direction such that these paths are collision-free. So, similar to other state abstract pathfinding problems, MAPF can also be considered as combination of different pieces(which are agents paths) to form a state and we want to achieve a particular end configuration of state in which case the agent paths don't collide with each other. It should be noted that the eight tile sliding puzzle problem can also be considered as a MAPF problem in which we can think of each tile as a robot.

Visualising such problems require heavy processing in terms of state and search. And to draw the nodes and states, we need much more drawing instructions as it can get much more complicated to visualise these problems.

The high level idea is similar to the tile solving puzzle. We will have a default representation of the state which will be provided independent of any particular step of the algorithm. There will also be default values of the variables used for drawing state representations. On top of this, each event(step of the algorithm during its running course), will have some information regarding state change at that particular step. So, we know that pathfinding works on node which are abstractions of the state. The information regarding state is additionally provided by every node or step. This information is superimposed on top of default state structure and variables to retrieve the state represented by that node.

The format of search trace file is also a bit different from that of tile solving puzzle in a sense that we have pre-defined configurations and primitives that are expected to be provided. Here also the state is drawn using SVG inside a resizable draggable box. So, the information required to draw the state is expected to be given to SVG API directly and expectation from search trace file is to comply with that standard. For example: basic shapes are referred to as rect or path or circle, etc. and so are different attributes like stroke, fill, viewBox, etc.

Here is an example file: [MAPF Problem Search Trace](http://pf-algo-viz.org/algorithms/mapf.json)

Here also, the identification of node abstraction of state in search algorithm by this app is done using 2 attributes inside the search trace json file. They are stateExpansion and stateStructure. The way MAPF differs from other state abstract pathfinding problems is using `layout` property inside the `stateStructure`. Other expected properties include `agents` which provide number of agents(20 in the given example), `map` which is a grid map using the same format that we used in our normal grid based pathfinding maps and can also be found [here](https://movingai.com/benchmarks/formats.html). Other than these three properties(`layout`, `agents` and `map`), we have 3 other properties used to draw these states:
- `primitives`: The `primitives` attribute defines type of objects combinations of which will give us the whole state. To understand more, let's take a look at the example:
```json
  {
    "source": {
      "type": "circle",
      "props": {"cx":0,"cy":1,"r":2,"stroke-width":3,"stroke":4,"fill":5},
      "message":6
    },
    "destination": {
      "type": "rect",
      "props": {"x":0,"y":1,"width":2,"height":3,"stroke-width":4,"stroke":5,"fill":6},
      "message":7
    },
    "path":{
      "type": "path",
      "props": {"d":0,"stroke-width":1,"stroke":2,"fill":3}
    },
    "conflict": {
      "type": "text",
      "props": {"font-size":0,"x":1,"y":2,"stroke":3,"fill":4,"data-agent-1":5,"data-agent-2":6,"data-timestamp":7},
      "value":"X",
      "message":8
    }
  }
```
Normally, to represent a state, we will need these 4 primitive types only: `source`, `destination`, `path` and `conflict`. Further details of each primitive type is in the form of object which has 2 compulsory properties which are `type` - type of graphics object to draw within a SVG node; and `props` - properties required to draw that SVG node inside the DOM. Other than these, we also have a `message` key which provides what to display when user hovers over this primitive in the form of a popup. In case the `type` is "text" which is the case for conflicts, this also requires a `value` which we use as "X". The interesting thing to note here is the value of the `props` object keys and `message`. These are numbers starting from 0. These refer to the value of index inside an array. This means that we need an array to define a particular primitive. For example: If we have an array with the value `["fs",17,15,"s","f",0,3,20,"Conflict between Agent 0 and 3 at (17,15) at timestamp 20"]` for `conflict` type `primitive`. This means that draw a text node inside the SVG. Its value should be "X". Its `font-size` will be specified by variable "fs" whose value can be further fetched from `defaultValues` inside `stateStructure` or `overrideDefaultValues` inside `eventList`. Its position i.e. (x, y) would be (17, 15). It's `stroke` and `fill` value would be given by "s" and "f", similar to `font-size`. It will have 3 more data attributes(HTML node) that are `data-agent-1`, `data-agent-2`, `data-timestamp` whose values are 0, 3 and 20 respectively. When user hover over this this, he sees a popup with the message "Conflict between Agent 0 and 3 at (17,15) at timestamp 20".
- `scaffold`: This is very much similar to tile sliding puzzle's `scaffold` property in the sense of its high level usage. It also contains the framework definition. Let's look at the example below to understand how `scaffold` property is defined in MAPF:
```json
 "scaffold": [{
      "type": "source",
      "elements": [
        [3,12,"r","sw","s","c0","Agent 0 Source(3,12)"],
        [4,20,"r","sw","s","c1","Agent 1 Source(4,20)"],
        [26,13,"r","sw","s","c2","Agent 2 Source(26,13)"],
        [29,7,"r","sw","s","c3","Agent 3 Source(29,7)"],
        [24,2,"r","sw","s","c4","Agent 4 Source(24,2)"],
        [8,20,"r","sw","s","c5","Agent 5 Source(8,20)"],
        [20,16,"r","sw","s","c6","Agent 6 Source(20,16)"],
        [18,3,"r","sw","s","c7","Agent 7 Source(18,3)"],
        [28,26,"r","sw","s","c8","Agent 8 Source(28,26)"],
        [23,18,"r","sw","s","c9","Agent 9 Source(23,18)"],
        [6,2,"r","sw","s","c10","Agent 10 Source(6,2)"],
        [26,2,"r","sw","s","c11","Agent 11 Source(26,2)"],
        [10,27,"r","sw","s","c12","Agent 12 Source(10,27)"],
        [15,9,"r","sw","s","c13","Agent 13 Source(15,9)"],
        [12,26,"r","sw","s","c14","Agent 14 Source(12,26)"],
        [14,22,"r","sw","s","c15","Agent 15 Source(14,22)"],
        [3,18,"r","sw","s","c16","Agent 16 Source(3,18)"],
        [31,29,"r","sw","s","c17","Agent 17 Source(31,29)"],
        [29,11,"r","sw","s","c18","Agent 18 Source(29,11)"],
        [1,26,"r","sw","s","c19","Agent 19 Source(1,26)"]
      ]
    },
    {
      "type": "destination",
      "elements": [
        [17,15,"w","h","sw","s","c0","Agent 0 Destination(17,15)"],
        [2,4,"w","h","sw","s","c1","Agent 1 Destination(2,4)"],
        [8,11,"w","h","sw","s","c2","Agent 2 Destination(8,11)"],
        [9,31,"w","h","sw","s","c3","Agent 3 Destination(9,31)"],
        [30,31,"w","h","sw","s","c4","Agent 4 Destination(30,31)"],
        [15,11,"w","h","sw","s","c5","Agent 5 Destination(15,11)"],
        [13,6,"w","h","sw","s","c6","Agent 6 Destination(13,6)"],
        [5,16,"w","h","sw","s","c7","Agent 7 Destination(5,16)"],
        [10,10,"w","h","sw","s","c8","Agent 8 Destination(10,10)"],
        [18,19,"w","h","sw","s","c9","Agent 9 Destination(18,19)"],
        [30,28,"w","h","sw","s","c10","Agent 10 Destination(30,28)"],
        [13,4,"w","h","sw","s","c11","Agent 11 Destination(13,4)"],
        [31,0,"w","h","sw","s","c12","Agent 12 Destination(31,0)"],
        [18,9,"w","h","sw","s","c13","Agent 13 Destination(18,9)"],
        [12,17,"w","h","sw","s","c14","Agent 14 Destination(12,17)"],
        [30,12,"w","h","sw","s","c15","Agent 15 Destination(30,12)"],
        [11,16,"w","h","sw","s","c16","Agent 16 Destination(11,16)"],
        [6,2,"w","h","sw","s","c17","Agent 17 Destination(6,2)"],
        [29,18,"w","h","sw","s","c18","Agent 18 Destination(29,18)"],
        [4,21,"w","h","sw","s","c19","Agent 19 Destination(4,21)"]
      ]
    },
    {
      "type": "path",
      "elements": [
        ["d0","sw","c0","tr","Agent 0 Path"],
        ["d1","sw","c1","tr","Agent 1 Path"],
        ["d2","sw","c2","tr","Agent 2 Path"],
        ["d3","sw","c3","tr","Agent 3 Path"],
        ["d4","sw","c4","tr","Agent 4 Path"],
        ["d5","sw","c5","tr","Agent 5 Path"],
        ["d6","sw","c6","tr","Agent 6 Path"],
        ["d7","sw","c7","tr","Agent 7 Path"],
        ["d8","sw","c8","tr","Agent 8 Path"],
        ["d9","sw","c9","tr","Agent 9 Path"],
        ["d10","sw","c10","tr","Agent 10 Path"],
        ["d11","sw","c11","tr","Agent 11 Path"],
        ["d12","sw","c12","tr","Agent 12 Path"],
        ["d13","sw","c13","tr","Agent 13 Path"],
        ["d14","sw","c14","tr","Agent 14 Path"],
        ["d15","sw","c15","tr","Agent 15 Path"],
        ["d16","sw","c16","tr","Agent 16 Path"],
        ["d17","sw","c17","tr","Agent 17 Path"],
        ["d18","sw","c18","tr","Agent 18 Path"],
        ["d19","sw","c19","tr","Agent 19 Path"]
      ]
    }
 ]
```
So, we can see that `scaffold` is an array of objects. Each object caters to different `primitive` which is given by `type` attribute. It also has `elements` attribute which array of those primitives. Generally, in default scaffold, we will have source, destination and path. Since there are 20 `agents` in our example, we will have 20 elements in each of these arrays. _Please note that `elements` is given by array of arrays. This is because in order to represent or draw a primitive, we need an array to suggest its properties for drawing._
- `defaultValues`: This is same as tile sliding puzzle `defaultValues`. It stores default values of the variables referred by `scaffold` or `newScaffoldComponents` inside `eventList`. _We will explain about `newScaffoldComponents` below_.


Above, we explained how to define stateStructure for MAPF. In case of MAPF search trace, we also have a different format of objects inside the `eventList` array. Let's look at example below:
```json
  {
    "id": 3,
    "pId": 1,
    "type": "generating",
    "stateVariables": {
      "overrideDefaultValues": {
        "d4": [
          [2,24],[3,24],[3,25],[4,25],[5,25],[6,25],[7,25],[7,26],[8,26],[9,26],[9,27],[10,27],[11,27],[11,28],[12,28],[13,28],[14,28],[15,28],[15,29],[16,29],[16,30],[17,30],[18,30],[19,30],[20,30],[21,30],[22,30],[23,30],[24,30],[25,30],[26,30],[27,30],[28,30],[29,30],[30,30],[31,30]
        ]
      },
      "newScaffoldComponents": [
        {
          "type": "conflict",
          "children":[
            ["fs",17,15,"s","f",0,3,20,"Conflict between Agent 0 and 3 at (17,15) at timestamp 20"],
            ["fs",17,15,"s","f",0,8,22,"Conflict between Agent 0 and 8 at (17,15) at timestamp 22"],
            ["fs",17,15,"s","f",0,17,28,"Conflict between Agent 0 and 17 at (17,15) at timestamp 28"],
            ["fs",15,11,"s","f",5,8,28,"Conflict between Agent 5 and 8 at (15,11) at timestamp 28"],
            ["fs",10,10,"s","f",8,17,40,"Conflict between Agent 8 and 17 at (10,10) at timestamp 40"],
            ["fs",18,19,"s","f",9,17,23,"Conflict between Agent 9 and 17 at (18,19) at timestamp 23"],
            ["fs",25,2,"rs","rf",11,4,1,"Conflict Resolved between Agent 11 and 4 at (25,2) at timestamp 1"],
            ["fs",18,9,"s","f",13,6,9,"Conflict between Agent 13 and 6 at (18,9) at timestamp 9"],
            ["fs",18,9,"s","f",13,10,19,"Conflict between Agent 13 and 10 at (18,9) at timestamp 19"],
            ["fs",12,17,"s","f",14,3,27,"Conflict between Agent 14 and 3 at (12,17) at timestamp 27"]
          ]
        }
      ]
    }
  }
```

Now this object suggests that "Draw a node whose id is 3 and parent id is 1. The type of this node is generating. (Since, there is no layout provided for the drawing instruction, the x and y positions to draw the _circular_ nodes are generated automatically by the app by looking at the id and pId values. And that is why `variables` is not provided.)" We have another property: `stateVariables`. It has 2 attributes: `overrideDefaultValues` and `newScaffoldComponents`. Both of these values work with `defaultValues` and `scaffold` properties of `stateVariables` respectively. If a variable's value present in `overrideDefaultValues` was also present in `defaultValues`, the former is given higher precedence with respect to that node. The `newScaffoldComponents` give additional `primitives` that we need to draw in SVG to represent the state referred by this node. Ot follows the same format as `scaffold`.

__With these instructions, we are able to visualise this algorithm. The demo link can be found on the homepage.__
