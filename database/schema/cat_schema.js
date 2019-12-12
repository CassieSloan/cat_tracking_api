const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatSchema = new Schema ({
    face: {
        type: String
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum : ['male', 'female', 'intersex'],
        default: 'N/A'
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = CatSchema;