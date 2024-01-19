import { customErrorHandler } from "../../../errorHandler/errorHandler.js"
import PostModel from "../postModels/postModel.js";

export default class PosrControllers {
    // @ GET All Posts 
    gettAllPostsControllers = (req, res) => {
        try {
            const allPosts = PostModel.getAllPostModel();
            return res.status(200).json({ Status: "Success", posts: allPosts });
        } catch (error) {
            throw new customErrorHandler(400, 'Something went wrong');
        }
    }

    // @ GET Post By Id
    getPostByIdControllers = (req, res) => {
        const id = Number(req.params.id);
        try {
            const postExists = PostModel.getPostByIdModel(id);
            return res.status(200).json({ Status: "Success", post: postExists });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    //@ GET Posts Posted By User By UserId
    getPostsByUserByUserIdControllers = (req, res) => {
        console.log("Function Call");
        const userId = Number(req.user.userId);

        try {
            const postsByUser = PostModel.getPostsCreatedByUserByUserIdModel(userId);
            return res.status(200).json({ Status: "Success", posts: postsByUser });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }
}