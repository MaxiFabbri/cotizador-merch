import mongoose from 'mongoose';

const collection = 'Quotations';

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