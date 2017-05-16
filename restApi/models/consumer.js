//File: consumer.js
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var consumerSchema = new Schema({
    name: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    phone: { type: String },
    address: { type: String },
    identification: { type: String },
    picture: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Consumer', consumerSchema);