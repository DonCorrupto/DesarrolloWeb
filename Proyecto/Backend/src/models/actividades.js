const mongoose = require('mongoose');
const actividadSchema = mongoose.Schema({
    Actividad:{
        type: String,
        required: true
    },
    imgActividad:{
        type: String,
        required: true
    },
    descripcionActividad:{
        type: String,
        required: true
    },
    idTown:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Actividad', actividadSchema);