const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    auth: { type: String, required: true },
    timestamp: { type: Number, required: true } 
})

module.exports = mongoose.model('User', userSchema)