const express = require("express");
const router = express.Router();
const CatController = require("../controllers/cat_controller");

router.get("/", CatController.index);

module.exports = router;