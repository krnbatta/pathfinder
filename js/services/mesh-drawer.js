import Store from './Store';
import config from '../config';
import environment from '../environment';
import errorNotifier from './error-notifier';
import polygonFactory from '../utils/polygon-factory';
import insertNode from '../utils/insert-node';
import insertEdges from '../utils/insert-edges';
import Controller from '../controller';

export default {
  draw() {
    var mesh = Store.find('Mesh');
    mesh.meshPolygons.then(function (meshPolygons) {
      Controller.setupRenderer();
      mesh.meshData.then(function (meshData) {
        meshPolygons.forEach(function (polygonObj) {
          var polygon = polygonFactory(polygonObj);
          insertNode(Controller, polygon);
        });
      });
    }, function (err) {
      errorNotifier(err);
    });
  }
}
