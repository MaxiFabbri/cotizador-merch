import mongoose from 'mongoose';
import supplierPaymentMethodsModel from './SupplierPaymentMethod.js';


const collection = 'Suppliers';

const schema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    code:{
        type:String,
        required:false
    },
    cuit:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false,
    },
    CustomerPaymentMethod:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SupplierPaymentMethod'
    }
})

const supplierModel = mongoose.model(collection,schema);

export default supplierModel;