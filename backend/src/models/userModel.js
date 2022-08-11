// const mongoose = require('mongoose')
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid";

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
        default: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    pets: { type: [{
        petName: String,
            petType: String,
        petImg: String,
        petId: String  
        
    }],
    default: {
        petName: 'Catoso',
        petType: 'Gato',
        petImg: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
        petId: uuidv4()
    }

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

