let template = () => `
  <div id='time-travel'>
  <input type="number" id="travel-backward-input" min="1">
  <button id='travel-backward' title='Travel Back'><i class='fas fa-fast-backward'/></button>
  <input type="number" id="travel-forward-input" min="1">
  <button id='travel-forward' title='Travel Forward'><i class='fas fa-fast-forward'/></button>
  </div>
`;
export default template;
