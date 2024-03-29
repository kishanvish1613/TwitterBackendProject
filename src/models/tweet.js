import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more then 250 characters']
    },
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    image: {
        type: String
    }
},{timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;