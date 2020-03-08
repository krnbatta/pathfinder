let template = () => `
  <input type="number" id="travel-jump-input" min="1">
  <button id='travel-jump' title='Travel Jump'><i class='fas fa-2x fa-plane'/></button>
  <input type="number" id="travel-backward-input" min="1">
  <button id='travel-backward' title='Travel Back'><i class='fas fa-2x fa-fast-backward'/></button>
  <input type="number" id="travel-forward-input" min="1">
  <button id='travel-forward' title='Travel Forward'><i class='fas fa-2x fa-fast-forward'/></button>
`;
export default template;
