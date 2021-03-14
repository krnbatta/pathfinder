# Playback and Camera Controls

To visualise, interact and debug with the search algorithm, the user is provided with some mechanisms to 'control' the visualisation of the search. We have essentially 2 main feature controls:
- Playback: We have playback mechanism in the app which gives user controls for `play`, `pause`, `stop`, `step forward` and `step backward` the search. These controls are quite intuitive. The play control steps through the events in the search trace one by one and displays them on the canvas. The pause control pauses the visualisation. The step functions are provided when the search is in paused state.
- Camera Controls: User at any time can use panning and zooming functionality by mouse scroll over the display canvas. There is also provisions of 3 camera control buttons. These enables the user to:
  - Scale the map to the default value.
  - Display the whole search space(or environment or map) on the screen as whole.
  - Display the part of environment where only the nodes interacted by the algorithm are present.
