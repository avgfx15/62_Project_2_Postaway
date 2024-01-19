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
}