import express from 'express';
import {create, get} from '../../controllers/tweet-controller.js'

const router = express.Router();

router.post('/tweets', create);
router.get('/tweets', get)

export default router;
