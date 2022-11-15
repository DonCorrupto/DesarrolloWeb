const express = require("express");
const router = express.Router();
const paisSchema = require("../models/paises");

// create pais
router.post("/paises", async (req, res) => {
  try {
    const pais = paisSchema(req.body);
    pais
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

//get all paiss
router.get("/paises", (req, res) => {
  try {
    paisSchema
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

// get a pais
router.get("/paises/:id", (req, res) => {
  try {
    const { id } = req.params;
    paisSchema
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

//update a pais
router.put("/paises/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    paisSchema
      .updateOne({ _id: id }, { $set: { name, email, password } })
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

//delete a pais
router.delete("/paises/:id", (req, res) => {
  try {
    const { id } = req.params;
    paisSchema
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
