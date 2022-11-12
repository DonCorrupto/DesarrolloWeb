const mongoose = require('mongoose');
const destinoSchema = mongoose.Schema({
    ciudad:{
        type: String,
        required: true
    },
    imgCiudad:{
        type: String,
        required: true
    },
    descripcionCiudad:{
        type: String,
        required: true
    },
    idPais: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Destino', destinoSchema);