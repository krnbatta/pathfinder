# Breakpoints and Jump Through

There are additional controls provided to the user. We have mechanism for placing debug breakpoints at different points in the app. The breakpoints can be set based on conditional statements(equal to, less than, greater than) regarding the nodes. We can place these breakpoints on intrinsic properties of the node: id, pId, f, g and h values. We can place multiple breakpoints. If during the playback of the algorithm, any node or event satisfies any active breakpoints set by the user, the search is paused and user can see the toast message referring to the breakpoint that made the system pause the search.

Additionally, user can also jump through or move in steps. This can help the users to jump to the point in the search that they are interested in. The user has to set 3 options to specify the jump:
- Number: This refers to the number of events/expansions/breakpoints to move forward/backward.
- Unit: The unit of jump can be event or expansion or breakpoint. Event refers to each event in the search trace. Expansions refer to number of times a new node is being expanded. Breakpoint refers to the breakpoints set manually(as stated above) or set automatically(due to error or uploading a comparison trace).
- Direction: The direction of the jump can be forward or backwards.
