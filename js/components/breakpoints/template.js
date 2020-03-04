let template = () => `
  <div id='breakpoints'>
    <button id='bp-btn' class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" title='Breakpoints'><i class='fas fa-exclamation-triangle'/></button>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Set Breakpoints</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="bps"></div>
          <div id="add-bp">
            <a>Add Breakpoint</a>
          </div>
        </div>
        <div class="modal-footer">
          <button id='remove-bp' type="button" class="btn btn-secondary" data-dismiss="modal">Remove</button>
          <button id='save-bp' type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
`;
export default template;
