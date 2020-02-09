import config from '../config';

/** Class representing a road cooridnates */
class RoadCo {
  /**
  * Create roadCoordinates
  * @param {object} file - roadCoordinates file uploaded by the user
  */
  constructor(file) {
    /**
    * _id is unique id of the road cooridnates that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * file is file of the cooridnates that is set from the param.
    * @type  {object}
    * @public
    */
    this.file = file;
  }

}

export default RoadCo;
