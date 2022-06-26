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

const updateUser = async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.username != null) {
        res.user.username = res.body.username
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    if (req.body.password != null) {
        res.user.password = res.body.password
    }
    if (req.body.birthDate != null) {
        res.user.birthDate = req.body.birthDate
    }
    if (req.body.phone != null) {
        res.user.phone = res.body.phone
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })

        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}


module.exports = {
    userHome,
    getAllUsers,
    createUser,
    updateUser,
    getUser
};



