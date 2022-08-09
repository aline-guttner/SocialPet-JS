// const mongoose = require('mongoose')
import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        default: "seu.usuario"
    },
    name: {
        type: String,
        default: "Seu nome"

    },
    email: {
        type: String,
        unique: true, //alterado

        lowercase: true //alterado
    },
    password: {
        type: String,
        select: false //alterado
    },
    birthDate: {
        type: Date,
        // required: true,
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
        // required: true,
        default: "(00)0000-0000"
    },
    backImg: {
        type: String,
        default: ""
    },
    profileImg: {
        type: String,
        default: ""
    }

})

userSchema.pre("save", async function (next) {
    if (this.password) {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
    }
    next();
});


const User = mongoose.model('User', userSchema); //alterado
// User.password = undefined
export default User;

// module.exports = mongoose.model('User', userSchema)

