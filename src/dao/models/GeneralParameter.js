import mongoose from 'mongoose';

const collection = 'generalParameters';

const schema = new mongoose.Schema({
    utilitiesTable:{
        type: Array,
        required:true
    },
    tax:{
        type:Number,
        required:true
    },
    monthlyRate:{
        type:Number,
        required:true
    }
})

const generalParameterModel = mongoose.model(collection,schema);

export default generalParameterModel;