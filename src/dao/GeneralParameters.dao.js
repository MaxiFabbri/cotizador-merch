import generalParameterModel from "./models/GeneralParameter.js";


export default class GeneralParameters {
    
    get = (params) =>{
        return generalParameterModel.find(params);
    }

    // getBy = (params) =>{
    //     return generalParameterModel.findOne(params);
    // }

    save = (doc) =>{
        return generalParameterModel.create(doc);
    }

    update = (id,doc) =>{
        return generalParameterModel.findByIdAndUpdate(id,{$set:doc})
    }

    // delete = (id) =>{
    //     return generalParameterModel.findByIdAndDelete(id);
    // }
}