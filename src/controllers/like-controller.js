import LikeService from "../services/like-service.js";
                                 
const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const data = req.body;
        const result = await likeService.toggleLike(data.modelId, data.modelType, data.userId);
        return res.status(201).json({
            data: result,
            success: true,
            message: "Successfully toggled a like",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error encountered in toggled a like",
            err: error
        })
    }
}