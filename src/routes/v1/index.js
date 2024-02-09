import express from 'express';
import {create, getById, getTweets} from '../../controllers/tweet-controller.js';
import {signUp} from '../../controllers/user-controller.js'

const router = express.Router();

router.post('/tweets', create);
router.get('/tweets', getById);
// router.get('/tweets', getTweets);

router.post('/signUp', signUp);


export default router;
