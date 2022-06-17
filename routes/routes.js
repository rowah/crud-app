const routes = require(".routes/routes");
const { application } = require("express");

application.use("/api", routes);

const express = require("express");

const router = express.Router();

module.exports = router;
