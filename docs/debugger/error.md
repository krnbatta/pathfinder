# Error Detection

We also have automatic checks in place for the search trace that basically runs the search trace from the algorithm from several tests which when not satisfied are intimated to user by displaying a toast error message.
There are 2 automatic checks associated:
- Consistency of the heuristic function: An estimate h(n) is called consistent if for each successor n′ we have h(n) ≤ d(n,n′)+h(n′) where d(n,n′) is the cost to reach n′ from n. Violation of this criterion could indicate that there is an error.
- Monotonic g-value: The g-value of every successor node should be monotonically increasing w.r.t. the parent node. Failure of this test is indicative of presence of a negative cost cycle. This is an error.

Additionally, user can also upload another trace. This is search trace for another algorithm (a known correct trace for reference) with which we want to do comparison of current algorithm. We only need this input trace in case we want to run a comparison for debugging. The app automatically run tests to check if the g-value of each expanded node is same as the ones in reference algorithm trace. The comparison of the nodes is done on the basis of their (x,y) positions on the canvas. So, it is important to note that this works only for the traces which provide position values of each node(i.e. value of `layout` is null in search trace). The app displays all the nodes at which the g-values diverged from the reference trace.
