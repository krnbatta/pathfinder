let template = () => `
  <label id="map-label" for="map-input"><img class="map-icon" src="icons/map.svg" type="image/svg+xml" /> Upload Operating Environment</label>
  <input type = 'file' id='map-input' multiple=true accept='.grid,.mesh,.co,.gr' />
`;
export default template;
