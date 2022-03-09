const mongoose = require("mongoose");

const { Schema } = mongoose;

const messageSchema = new Schema({
    sender: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Number, required: true } 
})

module.exports = mongoose.model('Message', messageSchema)