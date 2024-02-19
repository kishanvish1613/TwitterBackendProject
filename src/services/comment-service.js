import {CommentRepository, TweetRepository} from '../repository/index.js'

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create (modelId, modelType, userId, content) {
        if(modelType === 'Tweet'){
           var commentable = await this.tweetRepository.getById(modelId);
        }else if(modelType === 'Comment'){
            var commentable = await this.commentRepository.get(modelId);
        }else{
            console.log("wrong modelType");
            return
        }

        const comment = await this.commentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });

        commentable.comments.push(comment);
        await commentable.save();

        return comment;
    }

    async getCommentById (id){
        try {
            const result = await this.commentRepository.getwithComment(id);
            return result;
        } catch (error) {
            console.log("something went wrong in comment service");
            throw error;
        }
    }


}

export default CommentService;