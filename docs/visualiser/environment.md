# Search and Environment

The main display window visualises the algorithm using the information provided in the event trace and search space file. This is used to display mainly 2 things:

- Environment: The Whole Search Space within the limits of which the algorithm performs pathfinding search can be rendered on the screen. This is read using map file which can be grid or mesh or in road network format. We can upload the search space using the file upload button provided above the display canvas.
- Trace: The algorithm in its run course can be displayed as well. Basically, it displays different nodes along with their states(generating, expanding, updating, closing). It does this by using information from trace file which provides drawing instructions of different steps of the algorithm. We can upload the search trace using the file upload button next to map upload button.


Few important things to note about visualising the search are:

- The backdrop space image is separated in its rendering from that of search trace. So, this enables the users to have this operating environment optional. When rendered together, they are seen as single entity and can be panned and zoomed together i.e. the backdrop map pans and zooms along with the search.
- The state of different nodes are with the help of different colours allocated to each state separately in the internal configuration file. This means that we can distinguish a node in terms of its state(generating or updating or expanding or closing) by its colour.
- At any point of time, we can see the current state of the search via the path drawn from the source to the current node(where the search as unfolded at that moment).
