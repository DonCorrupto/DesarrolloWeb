const mongoose = require('mongoose');
const hotelSchema = mongoose.Schema({
    ciudad: {
        type: String,
        required: true,
    },
    imgCiudad:{
        type: String,
        required: true,
    },
    hotel:{
        nombre:{
            type: String,
            required: true
        },
        idHotel:{
            type: Number,
            required: true
        },
        imgHotel:{
            type: String,
            required: true
        },
        descripcionHotel:{
            type: String,
            required: true
        }
    },
})

module.exports = mongoose.model('Hotel', hotelSchema);