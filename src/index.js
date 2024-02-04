import express from 'express';
import connect from './config/database.js';
import Tweet from './models/tweet.js';



const app = express();
const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    connect();
    console.log('mongo DB connected');

})
