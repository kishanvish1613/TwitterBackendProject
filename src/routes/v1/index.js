import express from 'express';
import {create, getById, getTweets} from '../../controllers/tweet-controller.js';
import {signUp, signIn} from '../../controllers/user-controller.js'

const router = express.Router();

router.post('/tweets', create);
router.get('/tweets', getById);
// router.get('/tweets', getTweets);

router.post('/signUp', signUp);
router.post('/signIn', signIn);


export default router;
