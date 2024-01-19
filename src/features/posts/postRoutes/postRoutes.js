import express from 'express';
const postRouter = express.Router();

import PostControllers from '../postControllers/postControllers.js';
const postControllers = new PostControllers();
import jwtAuthentication from '../../../middlewares/authMiddleware.js';

// @ GET Posts Posted By User By UserId
postRouter.get('/postsbyuser', jwtAuthentication, postControllers.getPostsByUserByUserIdControllers);
// @ GET All POsts
postRouter.get('/', postControllers.gettAllPostsControllers);
// @ GET Post By Id
postRouter.get('/:id', postControllers.getPostByIdControllers);





export default postRouter;