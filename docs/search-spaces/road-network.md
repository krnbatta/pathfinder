# Road Network

This is relatively complicated type of environment. It requires 2 files: `gr` and `co`. `gr` file provides information regarding nodes, arcs and arc weights. `co` file prvides information regarding node coordinates. These files can be relatively bigger in size.

A graph contains n nodes and m arcs. Nodes are identified by integers 1...n. Graphs can be interpreted as directed or undirected, depending on the problem being studied. Graphs can have parallel arcs and self-loops. Arc weights are signed integers. By convention, shortest path graph file names should have the suffix `.gr`. Here is the format of `gr` file:
```
c This is a comment
p sp n m
a U V W
```

Meaning of each line is below:
  - Comment lines(starting with `c`) can appear anywhere and are ignored by programs.
  - The problem line(starting with `p`) is unique and must appear as the first non-comment line. This line has the format on the right, where n and m are the number of nodes and the number of arcs, respectively.
  - Arc descriptors(starting with `a`) are of the form on the right, where U and V are the tail and the head node ids, respectively, and W is the arc weight.

X-Y coordinates in the plane associated with nodes of the graph can be stored in an auxiliary file having the same name of the graph file it is related to and extension `.co`. For instance, file mygraph.co would contain the node coordinates of graph `mygraph.gr`. Here is the format of `co` file:
```
c This is a comment
p aux sp co n
v id X Y
```
Meaning of each line is below:
  - Comment lines(starting with `c`) can appear anywhere and are ignored by programs.
  - The problem line(starting with `p`) is unique and must appear as the first non-comment line. This line has the format on the right, where n is the number of coordinate lines that follow.
  - Coordinate lines(starting with `v`) are of the form on the right, where id , X and Y are the id of the node, its X-coordinate, and its Y-coordinate, respectively.

You can find more information and download examples of road network files here: [Link](http://users.diag.uniroma1.it/challenge9/download.shtml)

Please note that it is very important to note that the file extension of `co` & `gr` files should be `.co` & `.gr` respectively. Also, the name of `gr` and `co` files should be same as intended for the name of the map.
