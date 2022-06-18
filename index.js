require("dotenv").config();
// const { request } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/routes");

const PORT = 3000;

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
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`We are live on port ${PORT}`);
});
