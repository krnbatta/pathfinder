# Node

Each node in the search as few must-have properties. These are `id`, `pId`, `f`, `g`, `type`.
- `id` is unique identifier for the node. It is used to refer a node and no 2 different nodes have same `id`.
- `pId` is `id` of the parent node of the current node. It refers to the node upon expansion of which, the current node was generated or updated. In case of source node, this value is `null`.
- `g` provides associated cost or g-value of the node. Other data is node's estimated cost or h-value(`h`) and a bound on total cost, from start to target via the current node (`f`).
- `type` provides information regarding state of the node which can be 'generating' or 'updating' or 'expanding' or 'closing'. Besides this, it can also be 'source' and 'destination' marking start and end of the search.

Besides these intrinsic properties of the node, we also have drawing instruction values of each node which are specified in `variables` and `stateVariables` as explained in search trace section.

UI for node:

- User at any time can visualise the information regarding each node by hovering over that node. Upon hovering on the node, the node will be highlighted and a popup box would appear displaying the information regarding the node. The node information can also be found on the events list panel towards the right.
- User can also at any time click a particular node while the algorithm is in paused state to see how the algorithm unfolded path to the node from the source. This is shown by displaying a path from source node to the clicked node via all the intermediate parents.
- The events list on the right is also coloured for the current node that is being expanded and all its current children nodes. We can at anytime click on any particular event(or node) in the event list to visualise that snapshot of search, meaning visualising the search when the search unfolded the clicked event node.
