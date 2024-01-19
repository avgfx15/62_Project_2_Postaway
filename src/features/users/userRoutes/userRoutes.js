import express from 'express';

import UserControllers from '../userControllers/userControllers.js';
const userControllers = new UserControllers();
const userRouter = express.Router();

import { signUpFormValidator } from '../../../middlewares/expressValidators.js';


// + SignUp Route
userRouter.post('/signup', signUpFormValidator, userControllers.userSignUpController);
// + SignUp Route
userRouter.post('/signin', userControllers.userSIgnInController);



export default userRouter;