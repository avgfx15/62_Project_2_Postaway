import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import UserModel from "../userModels/userModel.js";

export default class UserControllers {
    // + User Signup Controller
    userSignUpController = (req, res) => {

        const { name, email, password } = req.body;

        try {
            const newUser = UserModel.signUpUserModel(name, email, password);

            if (!newUser) {
                throw new customErrorHandler(401, "Kindly please provide valid information")
            }
            return res.status(200).json({ Status: "Success", user: newUser })
        } catch (error) {
            throw new customErrorHandler(500, 'Server error: ' + error.message);
        }
    }

    // + USer SIgnIn Controller

    userSIgnInController = (req, res) => {
        const { email, password } = req.body;
        try {
            const checkUserValid = UserModel.signInUserModel(email, password);
            if (!checkUserValid) {
                throw new customErrorHandler(401, "Invalid credentials");
            }
            return res.status(200).json({ Status: "Success", user: checkUserValid });
        } catch (error) {
            throw new customErrorHandler(500, "Server error: " + error.message);
        }
    }
}

