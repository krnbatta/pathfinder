import Components from './components';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  Components.forEach((component) => {
    component.render();
  });
};
