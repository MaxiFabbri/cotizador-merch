import processModel from './models/Process.js';


export default class Processes {
    
    get = (params) =>{
        return processModel.find(params);
    }

    getBy = (params) =>{
        return processModel.findOne(params);
    }

    save = (doc) =>{
        return processModel.create(doc);
    }

    update = (id,doc) =>{
        return processModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return processModel.findByIdAndDelete(id);
    }
}