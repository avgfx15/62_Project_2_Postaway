import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import UserModel from "../userModels/userModel.js";

export default class UserControllers {
    // + User Signup Controller
    userSignUpController = (req, res) => {
        console.log('function call');
        const { name, email, password } = req.body;
        console.log(req.body);
        try {
            const newUser = UserModel.signUpUserModel(name, email, password);
            console.log(newUser);
            if (!newUser) {
                throw customErrorHandler(401, "Kindly please provide valid information")
            }
            return res.status(200).json({ user: newUser })
        } catch (error) {
            throw customErrorHandler(500, error)
        }
    }
}