import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    likes: {
        type: Number 
    },
    noOfRetweets: {
        type: Number
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
    }
},{timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;