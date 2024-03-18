import express from "express";
import {
  create,
  getTweetWithComments,
  getTweets,
} from "../../controllers/tweet-controller.js";
import { signUp, signIn } from "../../controllers/user-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import {
  createComment,
  getCommentId,
} from "../../controllers/comment-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";
import validate from "../../middlewares/validate-middleware.js";
import signUpSchema from "../../validators/auth-validator.js";

const router = express.Router();

router.post("/tweets", authenticate, create);
router.get("/tweets/:id", getTweetWithComments);
router.get("/tweets", getTweets);

router.post("/signUp", validate(signUpSchema), signUp);
router.post("/signIn", signIn);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);
router.get("/comments/:id", getCommentId);

export default router;
