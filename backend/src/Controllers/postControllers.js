const Post = require('../models/postModel.js')

const postHome = (req, res) => {
    console.log('REQUISIÇÃO', req);
    res.status(200).send({
        "message": "Olá, pessoa!"
    });
};

module.exports = {
    postHome

};