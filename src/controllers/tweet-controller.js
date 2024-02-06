import TweetService from '../services/tweet-service.js';

const tweetService = new TweetService();

export const create = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully create a tweet",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a tweet",
            err: error
        })
    }
}

export const get = async (req, res) => {
    try {
        const result = await tweetService.getTweet(req.query.id); 
        return res.status(200).json({
            data: result,
            success: true,
            message: "successfully fetch a tweet",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch a tweet",
            err: error
        })
    }
}