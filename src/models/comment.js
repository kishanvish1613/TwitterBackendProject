import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    comments: {
        type: String,
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    commentable: {
        type: String,
        required: true,
        refPath: ''
    }
},{timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;