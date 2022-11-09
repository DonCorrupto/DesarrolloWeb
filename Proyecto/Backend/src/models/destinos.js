const mongoose = require('mongoose');
const destinoSchema = mongoose.Schema({
    pais: {
        type: String,
        required: true,
    },
    imgPais:{
        type: String,
        required: true,
    },
    ciudad:{
        nombre:{
            type: String,
            required: true
        },
        idCiudad:{
            type: Number,
            required: true
        },
        imgCiudad:{
            type: String,
            required: true
        },
        descripcionCiudad:{
            type: String,
            required: true
        }
    },
})

module.exports = mongoose.model('Destino', destinoSchema);