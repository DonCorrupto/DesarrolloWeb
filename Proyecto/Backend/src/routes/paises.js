const express = require('express');
const router = express.Router();
const paisSchema = require('../models/paises')

// create pais
router.post('/paises', async (req, res) => {
    const pais = paisSchema(req.body)
    pais
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//get all paiss
router.get('/paises', (req, res) => {
    paisSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// get a pais
router.get('/paises/:id', (req, res) => {
    const { id } = req.params;
    paisSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//update a pais
router.put('/paises/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    paisSchema
        .updateOne({ _id:id }, { $set:{name, email, password} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//delete a pais
router.delete('/paiss/:id', (req, res) => {
    const { id } = req.params;
    paisSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;