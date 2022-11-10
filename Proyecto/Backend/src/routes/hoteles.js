const express = require('express');
const router = express.Router();
const hotelSchema = require('../models/hoteles')

// create user
router.post('/hoteles', (req, res) => {
    const hotel = hotelSchema(req.body)
    hotel
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//get all hotel
router.get('/hoteles', (req, res) => {
    hotelSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// get a hotel
router.get('/hoteles/:id', (req, res) => {
    const { id } = req.params;
    hotelSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//update a hotel
router.put('/hoteles/:id', (req, res) => {
    const { id } = req.params;
    const { pais, imgPais, ciudad } = req.body;
    hotelSchema
        .updateOne({ _id:id }, { $set:{pais, imgPais, ciudad} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//delete a hotel
router.delete('/hoteles/:id', (req, res) => {
    const { id } = req.params;
    hotelSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;