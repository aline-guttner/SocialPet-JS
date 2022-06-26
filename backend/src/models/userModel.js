const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date
    },
    profileImg: String,
    pets: [{
        petName: {
            type: String,
            default: 'Cat'
        },
        petType: String,
        petImg: String
    }]

})

module.exports = mongoose.model('User', userSchema)

