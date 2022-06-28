// require('dotenv').config()
import dotenv from "dotenv-safe"

// const express = require("express");
import express from "express" //alterado
// const mongoose = require('mongoose')
import database from "./config/database.js"; //alterado
// const cors = require("cors");
// import cors from "cors" //alterado
import authRouter from "./Routes/authRouter.js"

import postRoutes from "./Routes/postRoutes.js"

import userRoutes from "./Routes/userRoutes.js"

dotenv.config();

database.on('error', (error) => console.error(error)); //alterado
database.on('open', () => console.log('Connected to database')); //alterado

const app = express();
app.use(express.json());//alterado
// CAMINHO RAIZ DA REQUEST  
app.use("/auth", authRouter)

// app.use(cors()); //posição alterada



// app.use(express.json());



// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection



app.use('/posts', postRoutes)



app.use('/users', userRoutes)

// module.exports = app; 
export default app;