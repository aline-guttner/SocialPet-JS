require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require('mongoose')

const cors = require("cors");
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

const postRoutes = require('./Routes/postRoutes')

app.use('/posts', postRoutes)

const userRoutes = require('./Routes/userRoutes')

app.use('/users', userRoutes)

module.exports = app; 