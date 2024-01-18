import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import UserModel from "../userModels/userModel.js";

export default class UserControllers {
    // + User Signup Controller
    userSignUpController = (req, res) => {

        const { name, email, password } = req.body;

        try {
            const newUser = UserModel.signUpUserModel(name, email, password);

            if (!newUser) {
                throw customErrorHandler(401, "Kindly please provide valid information")
            }
            return res.status(200).json({ user: newUser })
        } catch (error) {
            throw customErrorHandler(500, error)
        }
    }
}