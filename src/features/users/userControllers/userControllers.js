import jwt from 'jsonwebtoken';
import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import UserModel from "../userModels/userModel.js";

export default class UserControllers {
    // + User Signup Controller
    userSignUpController = (req, res) => {

        const { name, email, password } = req.body;

        try {
            const newUser = UserModel.signUpUserModel(name, email, password);
            return res.status(200).json({ Status: "Success", user: newUser })
        } catch (error) {
            throw new customErrorHandler(401, error.message);
        }
    }

    // + USer SIgnIn Controller

    userSIgnInController = (req, res) => {
        const { email, password } = req.body;
        try {
            const checkUserValid = UserModel.signInUserModel(email, password);
            // # JWT Token setup
            const secretKey = 'mahantswamimaharajismyguru';
            const token = jwt.sign({ userId: checkUserValid.id, email: checkUserValid.email }, secretKey, { expiresIn: '1h' });
            // # Store token in cookies
            res.cookie('jwtToken', token, {
                secure: true, //$ Set to true if using HTTPS
                httpOnly: true,
                sameSite: 'strict', // $ Adjust to your requirements
                maxAge: 7 * 24 * 60 * 60 * 1000, //$ Set the expiration time (7 days in this example)
            });

            return res.status(200).json({ Status: "Success", user: checkUserValid, jwtToken: token });
        } catch (error) {
            throw new customErrorHandler(401, error.message);
        }
    }

    // @ GET All Users
    getAllUsersController = (req, res) => {
        try {
            const allUsers = UserModel.getAllUsersModel();
            return res.status(200).json({ Status: "Success", users: allUsers })
        } catch (error) {
            throw new customErrorHandler(401, error.message);
        }
    }

    // @ GET User By Id 
    getUserByIdController = (req, res) => {
        const id = Number(req.params.id);
        try {
            const checkUserExist = UserModel.getUserByIdModel(id);
            return res.status(200).json({ Status: "Success", user: checkUserExist });
        } catch (error) {
            throw new customErrorHandler(401, error.message);
        }
    }
}

