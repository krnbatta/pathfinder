//this is data store implementation. Store is a singleton class
//the values are stored in data. and it has common functions like createRecord, findAll, findBy, find, getRecord, relationships(hasMany, belongsTo)
import models from '../models';

let getModel = function(modelName) {
    let referredModel;
    models().forEach((model) => {
        if (model.modelName == modelName) {
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
class Store {
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
        this.data[modelName][record.id] = record;
        return record;
    }
}
let store = new Store();
export default store;
