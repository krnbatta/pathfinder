import Store from './Store';
import config from '../config';
import environment from '../environment';
import errorNotifier from './error-notifier';
import nodeFactory from '../utils/node-factory';
import insertNode from '../utils/insert-node';
import Controller from '../controller';

export default {
  draw() {
    let map = Store.find('Map');
    map.mapNodes.then((mapNodes) => {
    Controller.setupRenderer();
      map.mapData.then((mapData) => {
        mapNodes.forEach((node) => {
        node.isMap = true;
        let rect = nodeFactory(node);
        insertNode(Controller, rect);
        });
      });
    }, (err) => {
      errorNotifier(err);
    });
  }
}
