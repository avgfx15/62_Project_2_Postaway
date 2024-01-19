import express from 'express';
const postRouter = express.Router();

import PostControllers from '../postControllers/postControllers.js';
const postControllers = new PostControllers();

// @ GET All POsts
postRouter.get('/', postControllers.gettAllPostsControllers);





export default postRouter;