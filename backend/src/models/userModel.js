// const mongoose = require('mongoose')
import mongoose from "mongoose"
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
    profileImg: {
        type: String,
        default: ""
    },
    pets: {
        type: Array,
        default: ["62fbf765ec8cd8836f7a8dfe","62fbf864ec8cd8836f7a8e04","62fbf864ec8cd8836f7a8e05"]
    },
    phone: {
        type: String,
        // required: true,
        default: "(99) 99999-9999"
    },
    backImg: {
        type: String,
        default: "https://images.unsplash.com/photo-1660236822651-4263beb35fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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

