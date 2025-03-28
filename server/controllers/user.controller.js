import User from "../models/user.model.js"
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import errorHandler from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";


export const register = asyncHandler(async (req, res, next) => {

    const { fullName, username, password, email, gender, } = req.body;
    if (!fullName || !username || !password || !email || !gender) {
        return next(new errorHandler("all  field are required ", 400))

    }
    const user = await User.findOne({ username });
    if (user) {
        return next(new errorHandler("user already exist ", 400))
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const avatarType = gender === "male" ? "boy" : "girl";
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;

    const newUser = await User.create({
        fullName,
        username,
        password:hashedPassword,
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

export const login = asyncHandler(async (req, res, next) => {

    const {  username, password } = req.body;
    if ( !username || !password ) {
        return next(new errorHandler("Please Enter a valid username and password ", 400))

    }
    const user = await User.findOne({ username });
    if (!user) {
        return next(new errorHandler("Please enter a valid username ", 400))
    }

    const isValidPassword = await bcrypt.compare(password,user.password)
    if(!isValidPassword){
        return next(new errorHandler("Please enter a valid username ", 400))
    }

    res.status(200).json({
        success: true,
        responseData: {
            user
        }
    });


    res.send("hello register")
})



