const mongoose = require('mongoose');
const actividadSchema = mongoose.Schema({
    pais: {
        type: String,
        required: true,
    },
    imgPais:{
        type: String,
        required: true,
    },
    actividad:{
        nombre:{
            type: String,
            required: true
        },
        idActividad:{
            type: Number,
            required: true
        },
        imgActividad:{
            type: String,
            required: true
        },
        descripcionActividad:{
            type: String,
            required: true
        }
    },
})

module.exports = mongoose.model('Actividad', actividadSchema);