let template = () => `
  <div class="btn-with-title" style='display:none;'>
    <button id='fit-map' title='Fit Map'><i class='fas fa-desktop'></i><i class='fas fa-map'></i></button>
    <span class="btn-title">Fit Map</span>
  </div>
  <div class="btn-with-title" style='display:none;'>
    <button id='fit-debugger' title='Fit Algorithm'><i class='fas fa-desktop'></i><i class='fas fa-terminal'></i></button>
    <span class="btn-title">Fit Trace</span>
  </div>
  <div class="btn-with-title" style='display:none;'>
    <button id='fit-scale' title='Fit Scale'><i class='fas fa-desktop'></i><i class='fas fa-arrows-alt'></i></button>
    <span class="btn-title">Fit Scale</span>
  </div>
`;
export default template;
