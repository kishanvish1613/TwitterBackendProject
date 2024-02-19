import Comment from "../models/comment.js";

import CrudRepository from "./crud-repository.js";

class CommentRepository extends CrudRepository {
    constructor(){
        super(Comment);
    }

    async getwithComment(id) {
        try {
          const result = await Comment.findById(id).populate({
            path: 'comments', 
            populate: {
                path: 'comments'
            }, 
          })
          return result;
        } catch (error) {
          console.log("Something went wrong in crud-repo");
          throw error;
        }
      }

}

export default CommentRepository;