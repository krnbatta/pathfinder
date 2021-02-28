Figure 1 shows the main interface window of our system. The most prominent component is a two-dimensional WebGL canvas where we draw events from the search trace, as shown in Figure 1(A). The po- sition and appearance each associated node on the canvas depends on three things: (i) the state of the node (expand, generate, update); (ii) the drawing instructions in the trace and; (iii) on the specified layout (tree, network or none/custom). We further distinguish (in different colours) the start, target and the successors of the current node. For further context we allow the search trace to be visualised on top of a background image which shows the operating environment (Section 6.3 has more details regarding this aspect).