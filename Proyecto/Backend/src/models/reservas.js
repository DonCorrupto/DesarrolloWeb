const mongoose = require('mongoose');
const {Schema} = mongoose

const reservaSchema = new Schema({
    userId:{
        type: String,
        required: true,
    },
    opcionId: {
        type: String,
        required: true,
    },
    nombreOpcion: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('Reserva', reservaSchema);