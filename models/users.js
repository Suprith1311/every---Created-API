const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    Firstname: {
        type: String,
        required: true
    },

    Lastname: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    Age: {
        type: Number,
        required: true
    },

    City: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Users', userSchema)