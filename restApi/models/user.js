var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    address: { type: String },
    identification: { type: String },
    picture: { type: String },
    description: { type: String },
    //type: { type: String, enum: ['Trainer', 'Consumer'] }
});

module.exports = mongoose.model('User', userSchema);