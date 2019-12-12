const mongoose = require("mongoose");
const CatSchema = require("../schema/cat_schema");

const CatModel = mongoose.model("cat", CatSchema);

module.exports = CatModel;