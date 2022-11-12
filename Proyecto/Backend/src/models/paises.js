const mongoose = require('mongoose');
const {Schema} = mongoose

const paisSchema = new Schema({
    pais: {
        type: String,
        required: true,
    },
    imgPais:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Pais', paisSchema);