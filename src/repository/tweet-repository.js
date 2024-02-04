import Tweet from "../models/tweet.js";

class TweetRepository {
    async create(data) {
        try {
            const result = await Tweet.create(data);
            return result;
        } catch (error) {
            console.log('something went wrong in tweet-repo');
            throw error;
        }
    }

    async getTweets(){
        try {
            const response = await Tweet.find({});
            return response;
        } catch (error) {
            console.log('something went wrong in tweet-repo');
            throw error;
        }
    }

    async getById(userId){
        try {
            const response = await Tweet.findById(userId);
            return response;
        } catch (error) {
            console.log('something went wrong in tweet-repo');
            throw error;
        }
    }

    async deleteTweet(userId){
        try {
            const response = await Tweet.findByIdAndDelete(userId);
            return response;
        } catch (error) {
            console.log('something went wrong in tweet-repo');
            throw error;
        }
    }
}

export default TweetRepository;