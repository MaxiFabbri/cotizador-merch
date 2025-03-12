import mongoose from 'mongoose';

const collection = 'CustomerPaymentMethod';

const schema = new mongoose.Schema({
    customer_payment_description:{
        type: String,
        required:true
    },
    days_to_collect:{
        type:Number,
        required:true
    },
})

const customerPaymentMethodModel = mongoose.model(collection,schema);

export default customerPaymentMethodModel;