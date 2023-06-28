const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: {type: String},
    admin: {type: Boolean}
})

module.exports = mongoose.model('admin', loginSchema);