const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");

// create user
router.post("/users", async (req, res) => {
  try {
    const user = userSchema(req.body);
    /*
    const users = userSchema({
        email: user.email,
        name: user.name,
        password: await bcryptjs.hashSync(user.password, 8),
        tipo: user.tipo

    })
    */
    user
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

//get all users
router.get("/users", (req, res) => {
  try {
    userSchema
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

// get a user
router.get("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    userSchema
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

//update a user
router.put("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    userSchema
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

//delete a user
router.delete("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    userSchema
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
