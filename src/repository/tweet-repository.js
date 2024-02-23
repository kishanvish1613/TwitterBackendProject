import Tweet from "../models/tweet.js";

import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository{

    constructor() {
        super(Tweet);
    }

    async create(data) {
        try {
            const result = await Tweet.create(data);
            return result;
        } catch (error) {
            console.log('something went wrong in tweet-repo');
            throw error;
        }
    }

    async getTweetsWithComment(id){
        try {
            const response = await Tweet.findById(id).populate({
                path: 'comments', 
                populate: {
                    path: 'comments'
                }, 
                populate: {
                    path: 'comments'
                },
            }).lean();
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

    async getAllTweets() {
        try {
            const response = await Tweet.find({});
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