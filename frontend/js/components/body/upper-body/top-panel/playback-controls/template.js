let template = () => `
  <div class="btn-with-title">
    <button id='play' title='Play'><i class='fas fa-play'></i></button>
    <span class="btn-title">Play</span>
  </div>
  <div class="btn-with-title">
    <button id='pause' title='Pause'><i class='fas fa-pause'></i></button>
    <span class="btn-title">Pause</span>
  </div>
  <div class="btn-with-title">
    <button id='step-backward' title='Step Back'><i class='fas fa-undo'></i></button>
    <span class="btn-title">Step Back</span>
  </div>
  <div class="btn-with-title">
    <button id='step-forward' title='Step Forward'><i class='fas fa-redo'></i></button>
    <span class="btn-title">Step Forward</span>
  </div>
  <div class="btn-with-title">
    <button id='stop' title='Stop'><i class='fas fa-stop'></i></button>
    <span class="btn-title">Stop</span>
  </div>
`;
export default template;
