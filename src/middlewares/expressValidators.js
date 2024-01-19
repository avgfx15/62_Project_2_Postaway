import { body, validationResult } from 'express-validator';
import { customErrorHandler } from '../errorHandler/errorHandler.js';
import UserModel from '../features/users/userModels/userModel.js';


export const signUpFormValidator = async (req, res, next) => {
    const rules = [
        body('name').notEmpty().withMessage('Name is requires'),
        body('email').isEmail().withMessage('Please enter valid email address and it must be Unique').custom((enteredEmail) => {
            const emailExist = UserModel.getAllUsersModel().find((user) => user.email === enteredEmail);
            if (emailExist) {
                throw new customErrorHandler(401, 'Email already exists')
            } return true;
        }),
        body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long'),
    ];

    await Promise.all(rules.map((rule) => rule.run(req)));

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        // throw new customErrorHandler(400, validationErrors.array()[0].msg);
        return res.status(400).json({ errors: validationErrors.array()[0].msg });
    }
    next();
}