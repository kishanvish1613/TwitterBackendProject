import {TweetRepository, HashatagRepository} from '../repository/index.js';

class TweetService {
    constructor (){
        this.hashatagRepository = new HashatagRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag) => tag.substring(1).toLowerCase());
        // storing/creating tweet
        const tweet = await this.tweetRepository.create(data);
        // storing unique hashtag
        let alreadyPresentHashatag = await this.hashatagRepository.getHashtagByName(tags);
        let textOfPresentTags = alreadyPresentHashatag.map(tags => tags.text);
        let newTags = tags.filter(tag => !textOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {
                text: tag,
                tweets: [tweet.id]
            }
        });
        await this.hashatagRepository.bulkCreate(newTags);
        alreadyPresentHashatag.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tags.save();
        })

        return tweet;
    }

    async getTweet(id){
        try {
            const response = await this.tweetRepository.getById(id);
            return response;
        } catch (error) {
            console.log("something went wrong in tweet-service");
            throw error;
        }
    }

    async getAllTweet(){
        try {
            const result = await this.tweetRepository.getTweets();
            return result;
        } catch (error) {
            console.log("something went wrong in tweet-service");
            throw error;
        }
    }
}

export default TweetService;


