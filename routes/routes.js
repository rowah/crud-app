const express = require("express");
const router = express.Router();
module.exports = router;

const Model = require("../model/model");

//Post Method
router.post("/post", async (req, res) => {
  //res.send("Post API");
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(error).json({ message: error.message });
  }
  //res.send(req.params.id);
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
