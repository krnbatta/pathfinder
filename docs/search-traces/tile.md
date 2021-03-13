# Pathfinding in Slide Tile Puzzle

We have already talked about how it is possible for the search algorithm to be an abstraction of the original problem that it is trying to solve. In that case, each node is nothing but a state representation of the original problem at some point in time. [Slide Tile Puzzle](https://en.wikipedia.org/wiki/Sliding_puzzle) is one such example.

It is basically a combination puzzle in which game can have different states. Each state is formed by set of puzzles which can be manipulated into different combinations by a group of operations to result into different state. The goal of the puzzle game is to reach one state which is a desired end-configuration. If we try to abstract out this thing, it is noticeable that this puzzle game can be translated to a pathfinding problem in which source is start state configuration of the game and destination is end state configuration of the game. So basically, each node in the pathfinding algorithm translates to a state inside the puzzle game.

This app is capable of visualising and debugging such problem statements as well. But to visualise trace of this problem solving, we need our search trace file to provide additional information about the state corresponding to each node. The high level idea is that we will have a default representation of the state which will be provided independent of any particular step of the algorithm. There will also be default values of the variables used for drawing state representations. On top of this, each event(step of the algorithm during its running course), will have some information regarding state change at that particular step. So, we know that pathfinding works on node which are abstractions of the state. The information regarding state is additionally provided by every node or step. This information is superimposed on top of default state structure and variables to retrieve the state represented by that node.

The app implements the slide tile puzzle as an example and proof of capability of the app. This can be further extended to draw other states as well by slight modification of trace file. The state is drawn using SVG inside a resizable draggable box. So, the information required to draw the state is expected to be given to SVG API directly and expectation from search trace file is to comply with that standard. For example: basic shapes are referred to as rect or path or circle, etc. and so are different attributes like stroke, fill, viewBox, etc.

Here is an example file: [Slide Puzzle Problem Search Trace](http://pf-algo-viz.org/algorithms/tile.json)

The identification of node abstraction of state in search algorithm by this app is done using 2 attributes inside the search trace json file. They are stateExpansion and stateStructure.

- Value of stateExpansion is true suggesting that this visualisation requires separate state drawing.
- Value of stateStructure provides default state representation by giving the primitives to be drawn and default variable values required to draw these group of primitives forming a state drawing. Following is example of how stateStructure looks like:
```json
"stateStructure": {
  "defaultValues": {
    "xlmns":"http://www.w3.org/2000/svg", "width":"120", "height":"120",
    "viewBox":"0 0 196 196", "preserveAspectRatio":"none",
    "a":"0", "b":"65", "c":"130", "d":"195", "i1":"25", "j1":"40",
    "i2":"90", "j2":"105", "i3":"155", "j3":"170", "n0":"0", "n1":"1",
    "n2":"2", "n3":"3", "n4":"4", "n5":"5", "n6":"6", "n7":"7", "n8":"8",
    "w":"1.5", "s":"#000", "rwf":"#fff", "tf":"#000", "rgf":"#bfbfbf",
    "x":"130", "y":"130"},
  "scaffold": {
    "type":"svg", "props": { "width":"width", "height":"height",
    "viewBox":"viewBox", "preserveAspectRatio":"preserveAspectRatio" },
    "children":[
      {
        "type":"g", "props":{}, "children": [
          {"type":"rect","props":{"width":"d","height":"d","x":"a","y":"a","stroke-width":"w","stroke":"s","fill":"rwf"},"children":[]},
          {"type":"line","props":{"x1":"b","y1":"a","x2":"b","y2":"d","stroke-width":"w","stroke":"s"},"children":[]},
          {"type":"line","props":{"x1":"c","y1":"a","x2":"c","y2":"d","stroke-width":"w","stroke":"s"},"children":[]},
          {"type":"line","props":{"x1":"a","y1":"b","x2":"d","y2":"b","stroke-width":"w","stroke":"s"},"children":[]},
          {"type":"line","props":{"x1":"a","y1":"c","x2":"d","y2":"c","stroke-width":"w","stroke":"s"},"children":[]},
          {"type":"text","props":{"font-size":"25","x":"i1","y":"j1","stroke":"s","fill":"tf"},"value":"n1","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i2","y":"j1","stroke":"s","fill":"tf"},"value":"n2","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i3","y":"j1","stroke":"s","fill":"tf"},"value":"n3","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i1","y":"j2","stroke":"s","fill":"tf"},"value":"n4","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i2","y":"j2","stroke":"s","fill":"tf"},"value":"n5","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i3","y":"j2","stroke":"s","fill":"tf"},"value":"n6","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i1","y":"j3","stroke":"s","fill":"tf"},"value":"n7","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i2","y":"j3","stroke":"s","fill":"tf"},"value":"n8","children":[]},
          {"type":"text","props":{"font-size":"25","x":"i3","y":"j3","stroke":"s","fill":"tf"},"value":"n0","children":[]},
          {"type":"rect","props":{"width":"b","height":"b","x":"x","y":"y","stroke-width":"w","stroke":"s","fill":"rgf"},"children":[]}
        ]
      }
    ]
  }
}
```
- `stateStructure` is an object which has 2 properties: `scaffold` and `defaultValues`.
- `scaffold` contains the framework definition. It contains information about how different objects are nested within each other and information about where to fetch value of attributes for each of these objects. At the top level, we have an SVG object. It has `width`, `height`, `viewBox` and `preserveAspectRatio` as props and it has only one child which is of type `g`. `g` has no props but a bunch of children objects of type `rect` or `line` or `text`. If you are familiar with SVG, it is very easy to realise that this nesting tree structure of objects is similar to DOM drawing for svg node inside the browser. Let's look at one of the example of child of `g`.
For example: `{"type":"rect","props":{"width":"d","height":"d","x":"a","y":"a","stroke-width":"w","stroke":"s","fill":"rwf”}}`. This state is nothing but a drawing instruction which suggests us to draw a `rect` which is a rectangular graphic object. We know that to draw a rectangle, we need these properties: `width`, `height`, `x`, `y`, `stroke-width`, `stroke` and `fill`. These values are provided inside `props` property. To fetch the values mentioned for these properties(if we are looking for default representation of the state - For node specific state drawing, we will also have to couple this with the information provided by the node), we will have to look at the `defaultValues` object. Essentially, `"width": "d"` means that value of width property of the rectangle is given by the variable `d` whose value can be fetched from the `defaultValues` object. If this value changes for any state, then the changed value corresponding to state can be fetched from the corresponding `eventObject` denoting the node inside the `eventList`.
- As explained already, `defaultValues` object stores the default values of the variables. Lets look at these values: `"n0":"0", "n1":"1",
"n2":"2", "n3":"3", "n4":"4", "n5":"5", "n6":"6", "n7":"7", "n8":"8"`. We know that, in the tile puzzle, we have 9 numbers(in our example). So, each number(which is text of each rectangle inside the box) is given by these variables(`n0,n1,n2,n3,n4,n5,n6,n7,n8`) and their default value can be fetched from this object which are `0,1,2,3,4,5,6,7,8`.
- Another important piece that gives us ability to visualise these problems is present inside each object inside the `eventList`. Check the file(linked above) to see the difference. Example of one of the object from `eventList`: `{"id":3,"pId":1,"type":"generating","stateVariables":{"overrideDefaultValues": {"n1":1,"n2":2,"n3":3,"n4":4,"n5":5,"n6":0,"n7":7,"n8":8,"n0":6},"scaffoldValues:{“x”:”c”,”y”:”b”}}`. Now this object suggests that "Draw a node whose id is 3 and parent id is 1. The type of this node is generating. (Since, there is no layout provided for the drawing instruction, the x and y positions to draw the _circular_ nodes are generated automatically by the app by looking at the id and pId values. And that is why `variables` is not provided.)" We have another property: `stateVariables`. It has 2 attributes: `overrideDefaultValues` and `scaffoldValues`. Both of these values work with `defaultValues` and `scaffold` properties of `stateVariables` respectively. If a variable's value present in `overrideDefaultValues` was also present in `defaultValues`, the former is given higher precedence with respect to that node. Similarly, the values defined for drawing the scaffold structure of the state is prioritised in `scaffoldValues` compared to that given inside `scaffold`. In the given example, this means that the variables: "n0,n1,n2,n3,n4,n5,n6,n7,n8" which had default values as "0,1,2,3,4,5,6,7,8" will have new values as "6,1,2,3,4,5,0,7,8" for this node of id 3. Also, values of `x` and `y` which in scaffold structure were used to refer `x` and `y` values of `rect` and which had default values as "a" and "a" will not have values "c" and "b" for this node. Values of "c" and "b" can be fetched from `overrideDefaultValues` and `defaultValues`.


__With these instructions, we are able to visualise this algorithm. The demo link can be found on the homepage.__
