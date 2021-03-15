# Search Space

Normally, when visualising the search, we have 3 options:
1. `Abstract Network`: In this case, we just want to see how the search unfold. This is sufficient for us to understand and debug the search.
2. `Environment`: Most of the times, it is more important to understand the context of the search that the algorithm is trying to solve. In these cases, the search is shown on top of the environment or the whole search space. It can be crucial to visualise the context of search for a number of reasons. For example: In the grid search, we might have some grid cells as obstacles. It is important to visualise these negative spaces to understand if the algorithm is behaving correctly. The very important assumption, however, is that the search space is constant with respect to time.
3. `State Search`: Sometimes, it is possible that the problem search algorithm is trying to solve is search a state of some model. This means that the source is current state of the model and destination is desired state of the model. Nodes unfolded in theses cases are a state of the model. This requires keeping the search visualisation separate from that of the state. The search can be visualised in the form of abstract network and the state represented by any particular node can be displayed independent of the search visualisation.

### Abstract Network
This means that we don't have a whole search space associated with this particular algorithm visualisation. As explained in the search trace section, these expect `layout` value to be `false` in the search trace file.

### Environment
This requires map file as input to the app. At this moment we have implemented 3 different types of search spaces that should cover majority of the cases. These are:
- Grid
- Mesh
- Road Network


The search space or backdrop map image is separated from visualisation of search trace. So, the users have option to display the map or not. They can very much visualise the running algorithm via search trace independent of the whole search space. To make these large image files rendering more efficient, we create a png image file from these different files uploaded(grid or mesh or road network). We parse these files, render the image in png format and save it on the backend. Currently we store same name of the map image file on the backend as is on the uploaded file. So, after uploading once, if the user wants to see background map image of the map that has already been cached, the server skips parsing and image processing but directly renders the image from the cache. (This can cause problems in case new map is to be uploaded with the same name. This will be inculcated soon.) Our system is tested to visualise sufficiently large environments. The following table summarises:

Map Type | Size/Order | Render time (initial) | Render time (subsequent)
--- | --- | --- | ---
Grid | 1000k cells, 250M px, 2MB | 25s | 8s
Mesh | 35k polygons | 3s | 3s
Road Network | 265k nodes/∼735k edges, 100M px, 31MB | 18s | 5s

### State Search
This doesn't need a map file individually as such. But it requires the trace file to have information about state presentation. These require `layout` as `false`, `stateExpansion` as `true` and at the same time provide value of `stateStructure` as explained in the search trace section.
