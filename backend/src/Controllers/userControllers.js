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

module.exports = {
    userHome,
    getAllUsers
};



