import mongoose from 'mongoose';

const collection = 'SupplierPaymentMethod';

const schema = new mongoose.Schema({
    supplier_payment_description:{
        type: String,
        required:true
    },
    days_to_payment:{
        type:Number,
        required:true
    },
})

const supplierPaymentMethodModel = mongoose.model(collection,schema);

export default supplierPaymentMethodModel;