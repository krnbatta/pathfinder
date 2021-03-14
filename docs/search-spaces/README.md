# Search Spaces

Normally, when visualising the search, we have 3 options:
1. `Abstract Network`: In this case, we just want to see how the search unfold. This is sufficient for us to understand and debug the search.
2. `Environment`: Most of the times, it is more important to understand the context of the search that the algorithm is trying to solve. In these cases, the search is shown on top of the environment or the whole search space. It can be crucial to visualise the context of search for a number of reasons. For example: In the grid search, we might have some grid cells as obstacles. It is important to visualise these negative spaces to understand if the algorithm is behaving correctly. The very important assumption, however, is that the search space is constant with respect to time.
3. `State Search`: Sometimes, it is possible that the problem search algorithm is trying to solve is search a state of some model. This means that the source is current state of the model and destination is desired state of the model. Nodes unfolded in theses cases are a state of the model. This requires keeping the search visualisation separate from that of the state. The search can be visualised in the form of abstract network and the state represented by any particular node can be displayed independent of the search visualisation.

### Abstract Network
This means that we don't have a whole search space associated with this particular algorithm visualisation. As explained in the search trace section, these expect `layout` value to be `false` in the search trace file.

### Environment
This requires map file as input to the app. At this moment we have implemented 3 different types of search spaces that should cover majority of the cases. These are:

- Grid: This represents each individual unit as a cell. It can contain either a positive space or a negative space. It can also show other space (for example swamp in The Frozen Sea). Below is an example format:
```
type octile
height y
width x
map
```
where y and x are the respective height and width of the map.
The map data is store as an ASCII grid. The upper-left corner of the map is (0,0). The following characters are possible:

. - passable terrain
G - passable terrain
@ - out of bounds
O - out of bounds
T - trees (unpassable)
S - swamp (passable from regular terrain)
W - water (traversable, but not passable from terrain)

You can find more information and download examples of grid files here: [Link](https://movingai.com/benchmarks/formats.html)

Please note that it is very important to note that the file extension of grid files should be `.grid`.


- Mesh: This represents a mesh and it is different from grid in a way that each space is not a cell(4 perpendicular sides polygon) but can be any polygon.
Now we will discuss about file format of mesh files. All files have a header which is 3 lines long. The header is:

```
mesh
2
[integer#1] [integer#2]
```

Meaning of each header line is below:
  - mesh: all files begin with the word “mesh” on a single line
  - 2: all files have a version number, which is currently always 2 on a single line
  - [integer#1]: this indicates how many distinct points appear in the mesh
  - [integer#2]: this indicates how many distinct polygons appear in the mesh

In total a mesh file will have total number of lines equal to 3 + integer#1 + integer#2. After the header comes the mesh description.

Following k, the first i(integer#1) lines describe the points. The next j(integer#2) lines describe the polygons.

  - Each line of point data (described by i lines followed by 3 header lines) comprises several integers:

```
[x] [y] [list-of-adjacent-polygon-ids]
```

Meaning of each variable in point data line is below:
  - `x` and `y` are positive numbers. They represent each point inside the mesh.
  - `list-of-adjacent-polygon-ids` are ids of the polynomials that follow. This information is not used in drawing of mesh and can be ignored. These are used during search to tell us which polygons a point appears in as well as whether a point is a corner-point.

After the points come polygon descriptions(described by next j lines). A polygon is the result of connecting a set of points in a given order with a sequence of straight lines. Each line of polygon data therefore also comprises several integers:

```
[#sides] [list-of-point-ids] [list-of-adjacent-polygon-ids]
```

Meaning of each variable in polygons data line is below:
  - [#sides]: tells us how many sides the polygon has
  - [list-of-point-ids]: refers to the point data appearing the previous section. the id of a point is just the order in which it appears in the file (starting from zero).
  - [list-of-adjacent-polygon-ids]: refers to polygons appearing in the current section. This data is used during search and I think you can ignore it.

You can find more information and download examples of mesh files here: [Link](https://bitbucket.org/dharabor/pathfinding/src/master/anyangle/polyanya/)

Please note that it is very important to note that the file extension of mesh files should be `.mesh`.

- Road Network: This is relatively complicated type of environment. It requires 2 files: `gr` and `co`. `gr` file provides information regarding nodes, arcs and arc weights. `co` file prvides information regarding node coordinates. These files can be relatively bigger in size.

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


As we can see that the search space or backdrop map image is separated from visualisation of search trace. So, the users have option to display the map or not. They can very much visualise the running algorithm via search trace independent of the whole search space. To make these large image files rendering more efficient, we create a png image file from these different files uploaded(grid or mesh or road network). We parse these files, render the image in png format and save it on the backend. Currently we store same name of the map image file on the backend as is on the uploaded file. So, after uploading once, if the user wants to see background map image of the map that has already been cached, the server skips parsing and image processing but directly renders the image from the cache. (This can cause problems in case new map is to be uploaded with the same name. This will be inculcated soon.) Our system is tested to visualise sufficiently large environments. The following table summarises:

Map Type | Size/Order | Render time (initial) | Render time (subsequent)
--- | --- | --- | ---
Grid | 1000k cells, 250M px, 2MB | 25s | 8s
Mesh | 35k polygons | 3s | 3s
Road Network | 265k nodes/∼735k edges, 100M px, 31MB | 18s | 5s

### State Search
This doesn't need a map file individually as such. But it requires the trace file to have information about state presentation. These require `layout` as `false`, `stateExpansion` as `true` and at the same time provide value of `stateStructure` as explained in the search trace section.
