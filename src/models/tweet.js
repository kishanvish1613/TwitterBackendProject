import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more then 250 characters']
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