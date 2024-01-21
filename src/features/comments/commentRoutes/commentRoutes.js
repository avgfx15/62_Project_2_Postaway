import express from 'express';
import CommentControllers from '../commsntControllers/commsntsControllers.js';
import jwtAuthentication from '../../../middlewares/authMiddleware.js';

const commentRouter = express.Router();

const commentControllers = new CommentControllers();

// + Add New Comment
commentRouter.post('/:id', jwtAuthentication, commentControllers.addCommentByUserByPOstIdController);
// * Update CommentBy user
commentRouter.put('/:id', jwtAuthentication, commentControllers.updateCommentByUserByPOstIdController);
// - Delete Comment By postid
commentRouter.delete('/:id', jwtAuthentication, commentControllers.deleteCommentByOwnedUserController);
// - Delete Comment By commsntId
commentRouter.delete('/comment/:id', jwtAuthentication, commentControllers.deleteCommentByCommentIdController);
// @ GET All Comments
commentRouter.get('/', commentControllers.getAllCommentsController);




export default commentRouter;