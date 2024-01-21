import express from 'express';
import CommentControllers from '../commsntControllers/commsntsControllers.js';
import jwtAuthentication from '../../../middlewares/authMiddleware.js';

const commentRouter = express.Router();

const commentControllers = new CommentControllers();

// + Add New Comment
commentRouter.post('/:id', jwtAuthentication, commentControllers.addCommentByUserByPOstIdController);




export default commentRouter;