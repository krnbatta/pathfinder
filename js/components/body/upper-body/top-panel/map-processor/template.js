let template = () => `
  <button id='mp-btn' class="btn btn-primary" data-micromodal-trigger="mp-modal" title='Map Convertor'><i class='fas fa-2x fa-map-marked-alt'/></button>
  <div class="modal micromodal-slide" id="mp-modal" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="mp-modal-title">
        <header class="modal__header">
          <h2 class="modal__title" id="mp-modal-title">
            Map to Image Convert
          </h2>
          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <hr>
        <main class="modal__content" id="mp-modal-content">
          <label id="map-processor-label" for="map-input"><i class="fa fa-map"></i> Upload map</label>
          <input type = 'file' id='map-processor-input' multiple=true accept='.grid,.co,.gr' />
          <br>
          <div id="progress-container"></div>
        </main>
        <footer class="modal__footer">
          <button id='close-mp' class="modal__btn modal__btn-danger" data-micromodal-close>Close</button>
        </footer>
      </div>
    </div>
  </div>
`;
export default template;
