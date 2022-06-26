const User = require('../models/userModel.js')
const axios = require('axios')

const userHome = (req, res) => {
    console.log('REQUISIÇÃO', req);
    res.status(200).send({
        "message": "Olá, pessoa!"
    });
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
        // 201 means successfully created an object
    } catch (err) {
        res.status(400).json({ message: err.message })
        // 400 means the error is on the client side
    }
}

module.exports = {
    userHome,
    getAllUsers,
    createUser
};



