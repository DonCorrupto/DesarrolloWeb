const express = require('express');
const router = express.Router();
const actividadSchema = require('../models/actividades')

// create user
router.post('/actividades', (req, res) => {
    const actividad = actividadSchema(req.body)
    actividad
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//get all actividads
router.get('/actividades', (req, res) => {
    actividadSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// get a actividad
router.get('/actividades/:id', (req, res) => {
    const { id } = req.params;
    actividadSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//update a actividad
router.put('/actividades/:id', (req, res) => {
    const { id } = req.params;
    const { pais, imgPais, ciudad } = req.body;
    actividadSchema
        .updateOne({ _id:id }, { $set:{pais, imgPais, ciudad} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//delete a actividad
router.delete('/actividades/:id', (req, res) => {
    const { id } = req.params;
    actividadSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;