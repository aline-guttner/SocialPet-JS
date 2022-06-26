const User = require('../models/userModel.js')

const userHome = (req, res) => {
    console.log('REQUISIÇÃO', req);
    res.status(200).send({
        "message": "Olá, pessoa!"
    });
};

module.exports = {
    userHome
};



