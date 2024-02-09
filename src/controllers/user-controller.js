import UserService from '../services/user-service.js';

const userService = new UserService();

export const signUp = async (req, res) => {
    try {
        const response = await userService.signUp_Service(req.body);
        return res.status(200).json({
            data: response,
            success: false,
            message: "Successfully create a user",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a user",
            err: error
        })
    }
}