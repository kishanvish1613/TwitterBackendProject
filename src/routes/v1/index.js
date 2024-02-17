import express from "express";
import {
  create,
  getTweetWithComments,
} from "../../controllers/tweet-controller.js";
import { signUp, signIn } from "../../controllers/user-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import {authenticate} from '../../middlewares/authenticate.js'


const router = express.Router();

router.post("/tweets", create);
router.get("/tweets/:id", getTweetWithComments);

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.post("/likes/toggle", toggleLike);

router.post("/comments", authenticate, createComment);

export default router;
