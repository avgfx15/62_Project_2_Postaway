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

    // + Create New Post
    createNewPostControllers = (req, res) => {

        const userId = Number(req.user.userId);

        const { caption } = req.body;
        const newPost = {
            caption: caption,
            userId: userId,
            imageUrl: req.file.filename,
        }
        try {
            const allPosts = PostModel.createNewPostModel(newPost);
            return res.status(200).json({ Status: "Success", posts: allPosts });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    // *  UPDATE Post By Id By Post By User
    updatePostByPostOwnerUserController = (req, res) => {
        const userId = Number(req.user.userId);
        const { caption } = req.body;
        const postId = Number(req.params.id);

        const updatePost = {
            caption: caption,
            imageUrl: req.file.filename,
            userId: userId,
            id: postId
        }
        try {
            const postUpdate = PostModel.updatePostByPostOwnerModel(userId, postId, updatePost);
            return res.status(201).json({ Status: "Success", updatePost: postUpdate })
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    // - DELETE Post By Post Owner
    deletePostByOwnerController = (req, res) => {
        const userId = Number(req.user.userId);
        const postId = Number(req.params.id);
        try {
            const deletedPost = PostModel.deletePostByOwnerModel(userId, postId);
            return res.status(200).json({ Status: "Success", deletedPost: deletedPost });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    // @ GET Post by Search Filter   
    getPostBySearchFilterController = (req, res) => {
        const searchText = req.query.searchText;
        console.log(searchText);
        try {
            const modelResponse = PostModel.getPostBySearchFilterModel(searchText);
            return res.status(200).json({ Status: "Success", modelResponse: modelResponse });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    // @ GET Post Sorted By userId
    getSortedPostByUserIdController = (req, res) => {
        try {
            const sortedPost = PostModel.getSortedPostByUserIdModel();
            return res.status(200).json({ Status: "Success", sortedPost: sortedPost });
        } catch (error) {
            throw new customErrorHandler(400, error.message);

        }

    }
}