const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`We are live on port ${PORT}`);
});
