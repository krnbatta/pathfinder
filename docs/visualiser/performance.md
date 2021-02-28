Parsing very large maps and converting them to images can be slow. In Table 1 we report the time required to render a variety of maps from different domains and having different sizes. To make the system efficient, we have separated the creation of the backdrop image from the display of the search trace; i.e., users can visualise algorithms without seeing them performed on top of the operating environment. To create background images we pre-render them from the raw map files via a custom web service (written in NODE.JS). When the user uploads a map file, we compute a hash of the file, parse it, render a PNG image, and save it on the server using that hash as the file name. If a user subsequently requests a background image for a pre-rendered map, the existing image file is returned. We performed tests with rendering of different types of maps and the times taken by the system to render them, see Table 1. The formats that we currently support are grids, navigation meshes wand 2D networks. The grid format is same as the one used at the Grid-based Path Planning Competition [23]. The mesh representation we support is a modified face-vertex format as appears in [6]. The graph format we support is a minor variant of the one used at the 9th DIMACS challenge [8].2