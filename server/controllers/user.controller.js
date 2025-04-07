import User from "../models/user.model.js"
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import errorHandler from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = asyncHandler(async (req, res, next) => {

    const { fullName, username, password, confirmPassword, gender, } = req.body;
    if (!fullName || !username || !password || ! confirmPassword || !gender ) {
        return next(new errorHandler("all  field are required ", 400))

    }
    const user = await User.findOne({ username });
    if (user) {
        return next(new errorHandler("user already exist ", 400))
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const avatarType = gender === "male" ? "boy" : "girl";
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;

    const newUser = await User.create({
        fullName,
        username,
        password: hashedPassword,
        email,
        gender,
        avatar
    })
    const tokenData = {
        _id: newUser?._id
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES })

    res
        .status(200)
        .cookie("token", token, {
            expire: new Date(
                Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'None'
        })
        .json({
            success: true,
            responseData: {
                newUser,
                token
            }
        });


    res.send("hello register")
})

export const login = asyncHandler(async (req, res, next) => {

    const { username, password } = req.body;
    if (!username || !password) {
        return next(new errorHandler("Please Enter a valid username and password ", 400))

    }
    const user = await User.findOne({ username });
    if (!user) {
        return next(new errorHandler("Please enter a valid username ", 400))
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
        return next(new errorHandler("Please enter a valid username ", 400))
    }

    const tokenData = {
        _id: user?._id
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES })


    res
        .status(200)
        .cookie("token",token, {
            expire: new Date(
                Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            domain:process.env.CLIENT_URL
        })
        .json({
            success: true,
            responseData: {
                user,
                token
            }
        });


    // res.send("hello register")
})

export const getProfile = asyncHandler(async (req, res, next) => {

    const userId = req.user._id;
    console.log(userId);

    const profile = await User.findById(userId);

    res.status(200).json({
        success: true,
        responseData: profile,
    });
})

export const logout = asyncHandler(async (req, res, next) => {

    res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message:"logout successfull"
    });
})

export const getOtherUsers = asyncHandler(async (req, res, next) => {
    const otherUsers = await User.find({ _id: { $ne: req.user._id } });
  
    res.status(200).json({
      success: true,
      responseData: otherUsers,
    });
  });


