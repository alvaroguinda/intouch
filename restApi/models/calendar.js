//File: calendar.js
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var calendarSchema = new Schema({
    date: { type: Date },
    user_email: { type: String },
});

module.exports = mongoose.model('Calendar', calendarSchema);