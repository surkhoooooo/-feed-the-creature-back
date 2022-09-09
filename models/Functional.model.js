const mongoose = require('mongoose');

const functionalSchema = mongoose.Schema({
    title: String,
    description: String,
    coordinates: String,
    img: String
})

const Functional = mongoose.model("Functional", functionalSchema);

module.exports = Functional;