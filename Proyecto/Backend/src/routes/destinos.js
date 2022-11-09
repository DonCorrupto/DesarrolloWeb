const express = require('express');
const router = express.Router();
const destinoSchema = require('../models/destinos')

// create user
router.post('/destinos', (req, res) => {
    const destino = destinoSchema(req.body)
    destino
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//get all destinos
router.get('/destinos', (req, res) => {
    destinoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// get a destino
router.get('/destinos/:id', (req, res) => {
    const { id } = req.params;
    destinoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//update a destino
router.put('/destinos/:id', (req, res) => {
    const { id } = req.params;
    const { pais, imgPais, ciudad, idCiudad, imgCiudad, descripcionCiudad } = req.body;
    destinoSchema
        .updateOne({ _id:id }, { $set:{pais, imgPais, ciudad, idCiudad, imgCiudad, descripcionCiudad} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//delete a destino
router.delete('/destinos/:id', (req, res) => {
    const { id } = req.params;
    destinoSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;