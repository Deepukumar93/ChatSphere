import User from "../models/user.model.js"
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import errorHandler from "../utilities/errorHandler.utility.js";


export const register = asyncHandler(async (req, res, next) => {

    const { fullName, username, password, email, gender, } = req.body;
    if (!fullName || !username || !password || !email || !gender) {
        return next(new errorHandler("all  field are required ", 400))

    }
    const user = await User.findOne({ username });
    if (user) {
        return next(new errorHandler("user already exist ", 400))
    }

    const avatarType = gender === "male" ? "boy" : "girl";
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;

    const newUser = await User.create({
        fullName,
        username,
        password,
        email,
        gender,
        avatar
    })
    res.status(200).json({
        success: true,
        responseData: {
            newUser
        }
    });


    res.send("hello register")
})
export const login = (req, res, next) => {
    res.send("i m login")
}


