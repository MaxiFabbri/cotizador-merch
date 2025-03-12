import supplier from "./models/SupplierPaymentMethod.js";

export default class Suppliers {
    
    get = (params) =>{
        return supplier.find(params);
    }

    getBy = (params) =>{
        return supplier.findOne(params);
    }

    save = (doc) =>{
        return supplier.create(doc);
    }

    update = (id,doc) =>{
        return supplier.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return supplier.findByIdAndDelete(id);
    }
}