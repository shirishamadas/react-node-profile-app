const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    subject: {type: String},
    message: {type: String},
    time : { type : Date, default: Date.now }
})

module.exports = mongoose.model('users', userSchema);