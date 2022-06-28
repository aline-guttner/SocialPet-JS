import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    userId: {// esse userId é pra filtrar os posts daquele usuário e fazer eles aparecerem no perfil do usuário
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: [{
        type: String
    }],
    content: {
        type: String,
        default: ""
    }

})

const Post = mongoose.model('Post', postSchema)

export default Post

