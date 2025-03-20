import mongoose from 'mongoose';
import customerPaymentMethodsModel from './CustomerPaymentMethod.js';   



const collection = 'Customers';

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
    customerPaymentMethodId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerPaymentMethod'
    }
})

const customerModel = mongoose.model(collection,schema);

export default customerModel;