// import { asyncHandler } from "../utilities/asyncHandler.utility.js";
// import  errorHandler  from "../utilities/errorHandler.utility.js";
// import jwt from "jsonwebtoken";

// export const isAuthenticated = asyncHandler(async (req, res, next) => {
//     const token = req.cookies.token || req.headers["authorization"].replace("Bearer ", "");
//     console.log(token)
//     if (!token) {
//         return next(new errorHandler("Invalid token", 400));
//     }
//     const tokenData = jwt.verify(token,process.env.JWT_SECRET)
//     console.log(tokenData)
// });

import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import ErrorHandler from "../utilities/errorHandler.utility.js";  // ✅ Correct Import
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
    // console.log(req.cookies)
    const token =
        req.cookies?.token ||
        (req.headers["authorization"]?.startsWith("Bearer ") && req.headers["authorization"].split(" ")[1]);

    // console.log("Token:", token);

    if (!token) {
        return next(new ErrorHandler("Invalid token", 400));  // ✅ Correct Usage
    }

    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("Decoded Token Data:", tokenData);
        req.user = tokenData; // Attach user data to request
        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid token", 403));
    }
});
