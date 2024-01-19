import jwt from 'jsonwebtoken';
import { customErrorHandler } from '../errorHandler/errorHandler.js';

const jwtAuthentication = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        throw new customErrorHandler(404, 'User Unauthorized');
    }

    try {
        const secretKey = 'mahantswamimaharajismyguru';
        const payload = jwt.verify(token, secretKey);
        req.user = payload;
    } catch (error) {
        throw new customErrorHandler(404, error);
    }
    next();
}

export default jwtAuthentication;
