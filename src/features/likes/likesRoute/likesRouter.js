import express from 'express';

const likeRouter = express.Router();
import LikesControllers from '../likesControllers/likesControllers.js';
import jwtAuthentication from '../../../middlewares/authMiddleware.js';
const likesControllers = new LikesControllers();

// + POST Like || dislike toggle Routes
likeRouter.post('/:postId', jwtAuthentication, likesControllers.likeDislikeToggleController);
// @ GET Likes By PostId
likeRouter.get('/:postId', likesControllers.getAllLikesByPostIdController);
// @ GET All Likes
likeRouter.get('/', likesControllers.getAllLikesController)


export default likeRouter;