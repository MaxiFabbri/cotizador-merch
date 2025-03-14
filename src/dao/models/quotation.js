import mongoose from 'mongoose';
import customerModel from './Customer.js';

const collection = 'Quotation';

const schema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
    },
    monthlyRate: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        enum: ['Dolar', 'Euro', 'Peso'], // Opciones permitidas
    },
    isKit: {
        type: Boolean,
        required: true,
        default: false
    }
})

const quotationModel = mongoose.model(collection, schema);

export default quotationModel;