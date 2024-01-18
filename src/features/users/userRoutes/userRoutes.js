import express from 'express';

import UserControllers from '../userControllers/userControllers.js';
const userControllers = new UserControllers();
const userRouter = express.Router();

import { signUpFormValidator } from '../../../middlewares/expressValidators.js';



userRouter.post('/signup', signUpFormValidator, userControllers.userSignUpController);



export default userRouter;