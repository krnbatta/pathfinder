import config from '../../config';

let template = () => `
  <label>Map: </label>
  <input type='file' id='load-map' multiple=true accept='.grid,.mesh,.co,.gr' />
`;
export default template;
