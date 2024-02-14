import LikeRepository from "../repository/like-repository.js";
import TweetRepository from "../repository/tweet-repository.js";
import CommentRepository from "../repository/comment-repository.js";

class LikeService {
    constructor () {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }

    /**
     * modelId -> TweetId/CommentId
     * modelType -> Tweet/Comment
     * userId -> userId
     */
    async toggleLike (modelId, modelType, userId){
        let likeable;
        if(modelType === 'Tweet'){
            // getting -> Tweet -> ID 
            likeable = await this.tweetRepository.getById(modelId);
        }else if(modelType === 'Comment'){
            likeable = await this.commentRepository.get(modelId);
        }else{
            console.log("wrong modelType");
            return
        }

        // check -> like -> present or not
        const existslike = await this.likeRepository.findUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: likeable._id
        });

        let isAdded;

        // if -> present
        if(existslike){
            // delete it on modelId and delete on like DB also
            likeable.likes.pull(existslike.id);
            await likeable.save();
            const deleteLike = await this.likeRepository.destroy(existslike.id);
            isAdded = false;
        }else {
            // create it on modelId and like DB also
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: likeable._id
            })
            likeable.likes.push(newLike);
            await likeable.save();
            isAdded = true
        }

        return isAdded;

    }
}

export default LikeService;