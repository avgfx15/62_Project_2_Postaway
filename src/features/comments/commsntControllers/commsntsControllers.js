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
}