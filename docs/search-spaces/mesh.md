# Mesh

This represents a mesh and it is different from grid in a way that each space is not a cell(4 perpendicular sides polygon) but can be any polygon.
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
