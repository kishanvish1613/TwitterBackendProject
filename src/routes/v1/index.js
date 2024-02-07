import express from 'express';
import {create, get, getTweets} from '../../controllers/tweet-controller.js'

const router = express.Router();

router.post('/tweets', create);
router.get('/tweets', get);
// router.get('/tweets', getTweets);

export default router;
