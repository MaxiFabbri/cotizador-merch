import mongoose from 'mongoose';

const collection = 'Processes';

const schema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    description: {
        type: String,
        required: false
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Suppliers'
    },
    daysToPayment: {
        type: Number,
        required: false
    },
    unitCost: {
        type: Number,
        required: true
    },
    fixedCost: {
        type: Number,
        required: true
    },
    subTotalProcessCost: {
        type: Number,
        required: true
    }
})

const processModel = mongoose.model(collection, schema);

export default processModel;