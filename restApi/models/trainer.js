//File: trainer.js
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var trainerSchema = new Schema({
    email: { type: String },
    name: { type: String },
    habilities: { type: Array },
    phone: { type: String },
    address: { type: String },
    identification: { type: String },
    picture: { type: String },
    description: { type: String },
    password: { type: String },
});

module.exports = mongoose.model('Trainer', trainerSchema);