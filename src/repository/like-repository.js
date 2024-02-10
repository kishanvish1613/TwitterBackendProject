import Like from "../models/like.js";

import CrudRepository from "./crud-repository.js";


class LikeRepository extends CrudRepository{
    constructor() {
        super(Like);
    }

    async findUserAndLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log("Something went wrong in like-repo");
            throw error;
        }
    }

}

export default LikeRepository;
