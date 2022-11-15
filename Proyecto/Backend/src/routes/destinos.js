const express = require("express");
const router = express.Router();
const destinoSchema = require("../models/destinos");

// create user
router.post("/destinos", (req, res) => {
  try {
    const destino = destinoSchema(req.body);
    destino
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error",
      info: error.toString(),
    });
  }
});

//get all destinos
router.get("/destinos", (req, res) => {
  try {
    destinoSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error",
      info: error.toString(),
    });
  }
});

// get a destino
router.get("/destinos/:id", (req, res) => {
  try {
    const { id } = req.params;
    destinoSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error",
      info: error.toString(),
    });
  }
});

//update a destino
router.put("/destinos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { pais, imgPais, ciudad } = req.body;
    destinoSchema
      .updateOne({ _id: id }, { $set: { pais, imgPais, ciudad } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error",
      info: error.toString(),
    });
  }
});

//delete a destino
router.delete("/destinos/:id", (req, res) => {
  try {
    const { id } = req.params;
    destinoSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error",
      info: error.toString(),
    });
  }
});

module.exports = router;
