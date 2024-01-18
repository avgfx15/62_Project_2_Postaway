import { body, validationResult } from 'express-validator';
import { customErrorHandler } from '../errorHandler/errorHandler.js';

export const signUpFormValidator = async (req, res, next) => {
    const rules = [
        body('name').notEmpty().withMessage('Name is requires'),
        body('email').isEmail().withMessage('Please enter valid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long'),
    ];

    await Promise.all(rules.map((rule) => rule.run(req)));

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        // console.log(validationErrors);
        // throw new customErrorHandler(400, validationErrors.array()[0].msg);
        return res.status(400).json({ errors: validationErrors.array()[0].msg });
    }
    next();
}