const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: [{
        type: String
    }],
    content: {
        type: String
    }

})

module.exports = mongoose.model('Post', postSchema)

