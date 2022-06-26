const Post = require('../models/postModel.js')
const axios = require('axios')

const postHome = (req, res) => {
    console.log('REQUISIÇÃO', req);
    res.status(200).send({
        "message": "Olá, pessoa!"
    });
};

module.exports = {
    postHome

};