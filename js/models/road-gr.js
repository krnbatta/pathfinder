import config from '../config';

/** Class representing a road graph */
class RoadGr {
  /**
  * Create roadGraph
  * @param {object} file - roadGraph file uploaded by the user
  */
  constructor(file) {
    /**
    * _id is unique id of the road graph that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * file is file of the road graph that is set from the param.
    * @type  {object}
    * @public
    */
    this.file = file;
  }

}

export default RoadGr;
