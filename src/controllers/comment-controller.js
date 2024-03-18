import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const result = await commentService.create(
      req.body.modelId,
      req.body.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(201).json({
      data: result,
      success: true,
      message: "successfully create a comment",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a comment",
      err: error,
    });
  }
};

export const getCommentId = async (req, res) => {
  try {
    const response = await commentService.getCommentById(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully fetch a comment by id",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch a comment by id",
      err: error,
    });
  }
};
