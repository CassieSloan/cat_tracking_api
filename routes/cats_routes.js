const express = require("express");
const router = express.Router();
const CatController = require("../controllers/cat_controller");

router.get("/", CatController.index);
router.get("/new", CatController.make);
router.post("/", CatController.create);
router.get("/:id", CatController.show);
module.exports = router;