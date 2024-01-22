import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import LikesModel from "../likesModel/likesModel.js";

export default class LikesControllers {

    // + Like || Dislike Toggle Controller
    likeDislikeToggleController = (req, res) => {
        const userId = Number(req.user.userId);
        const postId = Number(req.params.postId);

        try {
            const modelResponse = LikesModel.toggleLikesForPostByIdModel(userId, postId);
            return res.status(200).json({ Status: "Success", likes: modelResponse.likes, post: modelResponse.postExists })
        } catch (error) {
            throw new customErrorHandler(400, error.message)
        }
    }

    // @ GET Likes By PostId
    getAllLikesByPostIdController = (req, res) => {
        const postId = Number(req.params.postId);

        try {
            const filterLikesByPostId = LikesModel.filterLikesByPostIdModel(postId);
            return res.status(200).json({ Status: "Success", Likes: filterLikesByPostId })
        } catch (error) {
            throw new customErrorHandler(400, error.message)
        }
    }

    // @ GET ALl Likes
    getAllLikesController = (req, res) => {
        try {
            const allLikes = LikesModel.getAllLikes();
            return res.status(200).json({ Status: "Success", Likes: allLikes });
        } catch (error) {
            throw new customErrorHandler(400, error.message)
        }
    }
}