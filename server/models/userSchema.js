const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("userSchema", userSchema)