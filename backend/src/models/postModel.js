import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    userId: {
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
        type: String
    }

})

const Post = mongoose.model('Post', postSchema)

export default Post

