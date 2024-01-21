import express from 'express';
const postRouter = express.Router();

import PostControllers from '../postControllers/postControllers.js';
const postControllers = new PostControllers();
import jwtAuthentication from '../../../middlewares/authMiddleware.js';
import upload from '../../../middlewares/fileUploadMiddleware.js';

// @ GET Posts Posted By User By UserId
postRouter.get('/postsbyuser', jwtAuthentication, postControllers.getPostsByUserByUserIdControllers);
// @ GET All POsts
postRouter.get('/', postControllers.gettAllPostsControllers);
// @ GET Post By Id
postRouter.get('/:id', postControllers.getPostByIdControllers);
// + POST Create New Post
postRouter.post('/newpost', jwtAuthentication, upload.single('imageUrl'), postControllers.createNewPostControllers);
//* UPDATE Post By Post Owner
postRouter.put('/:id', jwtAuthentication, upload.single('imageUrl'), postControllers.updatePostByPostOwnerUserController)





export default postRouter;