const express = require('express');
const router = express.Router();
const reservaSchema = require('../models/reservas')

// create reserva
router.post('/reservas', async (req, res) => {
    const reserva = reservaSchema(req.body)
    reserva
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//get all reservas
router.get('/reservas', (req, res) => {
    reservaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// get a reserva
router.get('/reservas/:id', (req, res) => {
    const { id } = req.params;
    reservaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//update a reserva
router.put('/reservas/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    reservaSchema
        .updateOne({ _id:id }, { $set:{name, email, password} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//delete a reserva
router.delete('/reservas/:id', (req, res) => {
    const { id } = req.params;
    reservaSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;