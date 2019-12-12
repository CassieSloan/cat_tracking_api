const express = require("express");
const router = express.Router();
const catRoutes = require("./cats_routes");

router.use("/cats", catRoutes);

module.exports = router;
