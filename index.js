const { request } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;

require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
//a code snippet that allows us to accept the data in JSON format.
app.use(express.json());

app.listen(3000, () => {
  console.log(`We are live on port ${PORT}`);
});
