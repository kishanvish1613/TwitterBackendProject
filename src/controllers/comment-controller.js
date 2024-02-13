import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const result = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        console.log("result", result);
        return res.status(201).json({
            data: result,
            success: true,
            message: "successfully create a comment",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a comment",
            err: error
        })
    }
}