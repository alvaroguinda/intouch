//File: tutorial.js
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var tutorialSchema = new Schema({
    pictures: { type: String },
    level: { type: Number },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    categories: { type: Array },
    material: { type: Array },
    califications: { type: Array }
});

module.exports = mongoose.model('Tutorial', tutorialSchema);