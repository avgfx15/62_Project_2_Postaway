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
            return res.status(200).json({ Status: "Success", user: checkUserValid });
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

