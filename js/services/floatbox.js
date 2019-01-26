import StateMachine from "javascript-state-machine";
import $ from "jquery";
import debounce from "../utils/debounce";

let FloatboxService = new StateMachine({
  transitions: [{
        name: 'init',
        from: 'none',
        to: 'hidden'
      },
      {
        name: 'show',
        from: 'hidden',
        to: 'shown'
      },
      {
        name: 'hide',
        from: 'shown',
        to: 'hidden'
      }
    ],
    data: {
      values: null
    },
    methods: {
      onInit(){
        let view = document.createElement('div');
        view.id = 'context-menu';
        view.style.display = 'none';
        $('body').append(view);
        this.execute = debounce(this.showMenu);
        this.bindHide();
      },
      onHide(){
        $("#context-menu").hide();
      },
      onShow(transition, event, values, position){
        this.values = values;
        $("#context-menu").html(this.htmlStr());
        $("#context-menu").css("left",position.x);
        $("#context-menu").css("top",position.y);
        $("#context-menu").show();
      },
      bindHide() {
        $(document).on("click",() => {
          if(this.state!="hidden"){
            this.hide();
          }
        });
      },
      showMenu(event, values, position) {
        if(this.state!="hidden"){
          this.hide();
        }
        this.show(event, values, position);
      },
      htmlStr() {
        return `
          <ul id='node-details'>
            <li>id: ${this.values.id}</li>
            <li>type: ${this.values.type}</li>
            <li>pId: ${this.values.pId}</li>
            <li>f: ${this.values.f}</li>
            <li>g: ${this.values.g}</li>
            <li>h: ${this.values.h}</li>
          </ul>
        `;
      }
    }
});
export default FloatboxService;
