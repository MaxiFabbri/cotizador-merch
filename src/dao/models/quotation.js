import mongoose from 'mongoose';

const collection = 'Quotations';

const schema = new mongoose.Schema({
    date: {
        type: Date,
        required: false
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
    },
    paymentMethodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaymentMethods'
    },
    monthlyRate: {
        type: Number,
        required: false
    },
    currency: {
        type: String,
        required: true,
        enum: ['Dolar', 'Euro', 'Peso'], // Opciones permitidas
        default: 'Peso',
    },
    quoteStatus: {
        type: String,
        required: true,
        enum: ['Cotizado', 'Enviada', 'Aceptada', 'Rechazada'], // Opciones permitidas
        default: 'Cotizado',
    },
    isKit: {
        type: Boolean,
        required: true,
        default: false
    }
})

const quotationModel = mongoose.model(collection, schema);

export default quotationModel;