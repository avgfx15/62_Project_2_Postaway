import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import CommentModel from "../commsntModel/commentModel.js";

export default class CommentControllers {


    // ? Comments Controller

    // + Add Comment By User On Post By Id 

    addCommentByUserByPOstIdController = (req, res) => {

        const userId = Number(req.user.userId);
        const postId = Number(req.params.id);

        try {
            const { content } = req.body;
            const modelResponse = CommentModel.addCommentByPostIdModel(postId, userId, content);
            return res.status(201).json({ Status: "Success", comments: modelResponse.comments, postExists: modelResponse.postExists });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    // * Update Comment By User On Post By Id
    updateCommentByUserByPOstIdController = (req, res) => {
        const userId = Number(req.user.userId);
        const postId = Number(req.params.id);
        const { content } = req.body;
        try {
            const updateComment = CommentModel.updateCommentOnPostByUserModel(userId, postId, content);
            return res.status(201).json({ Status: "Success", comments: updateComment });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    // - Delete Comment By Owned User
    deleteCommentByOwnedUserController = (req, res) => {
        const userId = Number(req.user.userId);
        const postId = Number(req.params.id);

        try {
            const restAllComments = CommentModel.deleteCommentByOwnedUserModel(userId, postId);
            return res.status(201).json({ Status: "Success", comment: restAllComments });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }

    // - Delete Comment By Comment Id
    deleteCommentByCommentIdController = (req, res) => {
        const id = Number(req.params.id);
        const userId = Number(req.user.userId)

        try {
            const restAllComments = CommentModel.deleteCommentByCommentIdModel(id, userId);
            return res.status(201).json({ Status: "Success", comment: restAllComments });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }


    // @ GET All Comment
    getAllCommentsController = (req, res) => {
        try {
            const allComments = CommentModel.getAllCommentsModel();
            return res.status(200).json({ Status: "Success", Comments: allComments });
        } catch (error) {
            throw new customErrorHandler(400, error.message);
        }
    }
}