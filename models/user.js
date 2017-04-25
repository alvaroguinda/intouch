var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    country: { type: String },
    name: { type: String },
    email: { type: String },
    type: { type: String, enum: ['Trainer', 'Consumer'] }
});

module.exports = mongoose.model('User', userSchema);