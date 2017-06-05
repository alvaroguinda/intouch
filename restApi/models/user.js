var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String },
    name: { type: String },
    interest: { type: Array },
    phone: { type: String },
    address: { type: String },
    identification: { type: String },
    picture: { type: String },
    description: { type: String },
    password: { type: String },
});

module.exports = mongoose.model('User', userSchema);