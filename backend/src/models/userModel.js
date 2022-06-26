const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: "seu.usuario"
    },
    name: {
        type: String,
        required: true,
        default: "Seu nome"

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
        type: Date,
        required: true,
        default: Date.now()
    },
    profileImg: String,
    pets: [{
        petName: {
            type: String,
            default: 'Cat'
        },
        petType: String,
        petImg: String
    }],
    phone: {
        type: String,
        required: true,
        default: "(00)0000-0000"
    }

})

module.exports = mongoose.model('User', userSchema)

