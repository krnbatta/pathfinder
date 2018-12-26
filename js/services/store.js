//this is data store implementation. Store is a singleton class
//the values are stored in data. and it has common functions like createRecord, findAll, findBy, find, getRecord, relationships(hasMany, belongsTo)
import models from '../models';

let getModel = function(modelName) {
    let referredModel;
    models().forEach((model) => {
        if (model.name == modelName) {
            referredModel = model;
            return;
        }
    });
    if (referredModel) {
        return referredModel;
    } else {
        //throw error saying wrong model name passed
    }
}

let instance = null;
class StoreSingleton {
    constructor() {
        if (!instance) {
            instance = this;
            this.data = {};
        }
        return instance;
    }
    createRecord(modelName, attributes) {
        this.data[modelName] = this.data[modelName] || {};
        let model = getModel(modelName);
        let record = new model(attributes);
        this.data[modelName][record._id] = record;
        return record;
    }
    find(modelName){
      return this.data[modelName][0];
    }
}
let Store = new StoreSingleton();
window.store = Store;
export default Store;
