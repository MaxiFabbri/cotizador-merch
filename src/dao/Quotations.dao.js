import quotationModel from './models/Quotation.js';


export default class quotations {
    
    get = (params) =>{
        return quotationModel.find(params);
    }

    getBy = (params) =>{
        return quotationModel.findOne(params);
    }

    save = (doc) =>{
        return quotationModel.create(doc);
    }

    update = (id,doc) =>{
        return quotationModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return quotationModel.findByIdAndDelete(id);
    }
}