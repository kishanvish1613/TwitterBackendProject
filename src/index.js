import express from 'express';
import connect from './config/database.js';
import TweetRepository from './repository/tweet-repository.js'



const app = express();
const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    connect();
    console.log('mongo DB connected');
    // const repo = new TweetRepository();
    // const res = await repo.deleteTweet('65bfd14b2f29c60171c7ccef');
    // console.log(res);
})
