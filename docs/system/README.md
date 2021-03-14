# System
The main concepts used in the system are:
1. MVC structure is used to develop frontend.
2. There is one main controller. Models data is stored inside in-app Store. Views are separated into different components. View structure uses state-machine architecture.
3. Heavy lifting is done by services and utils where services and utils take care of small functionalities.
4. Main libraries used are: state-machine, PIXI, PIXIRenderer, jQuery, d3-hierarchy, electron, canvas.
5. Server Image caching is done to save on subsequent rendering time of same map file.
6. Electron is used to run app from terminal by reading files passed as parameters on the local machine.


To run the app locally,

```
git clone https://github.com/krnbatta/pathfinder.git
cd /path/to/pathfinder
npm install
cd /path/to/pathfinder/frontend
npm install
cd /path/to/pathfinder/desktop
npm install
```

```
cd /path/to/pathfinder
npm start # run server
cd /path/to/pathfinder/frontend
npm start # run frontend webpack watcher
cd /path/to/pathfinder/desktop
python3 pathfinding-debugger.py -z mesh -m ../frontend/maps/mesh/arena.mesh -t ../frontend/algorithms/polyanya.json` # Launches desktop app
```
