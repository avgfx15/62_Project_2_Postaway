import express from 'express';

import UserControllers from '../userControllers/userControllers.js';
const userControllers = new UserControllers();
const userRouter = express.Router();



userRouter.post('/signup', userControllers.userSignUpController);



export default userRouter;