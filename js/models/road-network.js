import config from '../config';
import GridService from '../services/grid';

/** Class representing a road network */
class RoadNetwork {
  /**
  * Create a grid
  * @param {object} files - RoadNetwork files(co and gr) uploaded by the user
  */
  constructor({coFile, grFile}) {
    /**
    * _id is unique id of the road network that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * coFile is file of the cooridnates that is set from the param.
    * @type  {object}
    * @public
    */
    this.coFile = coFile;
    /**
    * grFile is file of the graph that is set from the param.
    * @type  {object}
    * @public
    */
    this.grFile = grFile;
    this.setupMap();
  },

  setupMap(){
    let roadCoordinates = Store.createRecord("RoadCo", this.coFile);
    let roadGraph = Store.createRecord("RoadGr", this.grFile);
  }

}

export default RoadNetwork;
