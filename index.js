const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

app.listen(PORT, () => {
  console.log(`Server is live on ${PORT}. Check it out!`);
});
