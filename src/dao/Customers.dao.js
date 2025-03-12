import customerModel from './models/Customer.js';


export default class Customers {
    
    get = (params) =>{
        return customerModel.find(params);
    }

    getBy = (params) =>{
        return customerModel.findOne(params);
    }

    save = (doc) =>{
        return customerModel.create(doc);
    }

    update = (id,doc) =>{
        return customerModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return customerModel.findByIdAndDelete(id);
    }
}