//Used while using Viva.js
import Controller from '../controller';

export default function(context, node){
  [node.up, node.down, node.left, node.right].forEach((neighbour) => {
    if(neighbour){
      context.graph.addLink(node.id, neighbour);
      // let linkId = node.id + '👉 ' + neighbour;
      // let line = Controller.graphics.getLinkUI(linkId);
      // line.color = 0xFFFFFFff;
    }
  });
}
