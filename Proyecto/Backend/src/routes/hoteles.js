const express = require("express");
const router = express.Router();
const hotelSchema = require("../models/hoteles");

// create user
router.post("/hoteles", (req, res) => {
  try {
    const hotel = hotelSchema(req.body);
    hotel
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

//get all hotel
router.get("/hoteles", (req, res) => {
  try {
    hotelSchema
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

// get a hotel
router.get("/hoteles/:id", (req, res) => {
  try {
    const { id } = req.params;
    hotelSchema
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

//update a hotel
router.put("/hoteles/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { pais, imgPais, ciudad } = req.body;
    hotelSchema
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

//delete a hotel
router.delete("/hoteles/:id", (req, res) => {
  try {
    const { id } = req.params;
    hotelSchema
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
