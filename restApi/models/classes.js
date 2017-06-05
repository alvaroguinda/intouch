//File: classes.js
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var classesSchema = new Schema({
    pictures: { type: String },
    level: { type: Number },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    categories: { type: Array },
    material: { type: Array },
    participants: { type: Number },
    duration: { type: Number },
    location: { type: String },
    califications: { type: Array },
});

module.exports = mongoose.model('Classes', classesSchema);