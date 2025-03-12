import supplierPaymentMethodModel from "./models/SupplierPaymentMethod.js";

export default class SupplierPaymentMethods {
    
    get = (params) =>{
        return supplierPaymentMethodModel.find(params);
    }

    getBy = (params) =>{
        return supplierPaymentMethodModel.findOne(params);
    }

    save = (doc) =>{
        return supplierPaymentMethodModel.create(doc);
    }

    update = (id,doc) =>{
        return supplierPaymentMethodModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return supplierPaymentMethodModel.findByIdAndDelete(id);
    }
}