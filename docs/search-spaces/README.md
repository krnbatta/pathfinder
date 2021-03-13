# Search Spaces

Normally, when visualising the search, we have 3 options:
1. `Abstract Network`: In this case, we just want to see how the search unfold. This is sufficient for us to understand and debug the search.
2. `Environment`: Most of the times, it is more important to understand the context of the search that the algorithm is trying to solve. In these cases, the search is shown on top of the environment or the whole search space. It can be crucial to visualise the context of search for a number of reasons. For example: In the grid search, we might have some grid cells as obstacles. It is important to visualise these negative spaces to understand if the algorithm is behaving correctly. The very important assumption, however, is that the search space is constant with respect to time.
3. `State Search`: Sometimes, it is possible that the problem search algorithm is trying to solve is search a state of some model. This means that the source is current state of the model and destination is desired state of the model. Nodes unfolded in theses cases are a state of the model. This requires keeping the search visualisation separate from that of the state. The search can be visualised in the form of abstract network and the state represented by any particular node can be displayed independent of the search visualisation.

### Abstract Network
Talk here about using layout as false and no map file is provided.

### Environment
This requires map file as input to the app. At this moment we have implemented 3 different types of search spaces that should cover majority of the cases. These are:
- Grid: This represents each individual unit as a cell. It can contain either a positive space or a negative space. It can also show other space (for example swamp in The Frozen Sea). The format required is .... This is an example file. Please look at the following examples: You can also find more files of these kinds. It is very important to note that the file extension of grid files should be .grid.
- Mesh: This represents a mesh and it is different from grid in a way that each space is not a cell(4 perpendicular sides polygon) but can be any polygon. The format required is .... This is an example file. Please look at the following examples: You can also find more files of these kinds. It is very important to note that the file extension of mesh files should be .mesh.
- Road Network: This is relatively complicated type of environment. It requires 2 files: gr and co. gr is used to represent graph and co is used to represent coordinates. These files can be very massive. The format required is .... This is an example file. Please look at the following examples: You can also find more files of these kinds. It is very important to note that the file extension of co & gr files should be .co & .gr respectively.

Our system is tested to visualise sufficiently large environments. The following table summarises:


### State Search
This doesn't need a map file individually as such. But it requires the trace file to have information about state presentation.
