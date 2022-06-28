import Post from "../models/postModel.js"

class postController {
    static postHome = (req, res) => {
        console.log('REQUISIÇÃO', req);
        res.status(200).send({
            "message": "Olá, pessoa!"
        });
    };
}



export default postController;