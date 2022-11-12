const mongoose = require('mongoose');
const hotelSchema = mongoose.Schema({
    hotel:{
        type: String,
        required: true
    },
    imgHotel:{
        type: String,
        required: true
    },
    descripcionHotel:{
        type: String,
        required: true
    },
    idCity:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Hotel', hotelSchema);