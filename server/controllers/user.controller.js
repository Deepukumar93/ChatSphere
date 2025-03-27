import User from "../models/user.model.js"
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import ErrorHandler from "../utilities/errorHandler.utility.js";


export const register = asyncHandler(async(req,res,next)=>{
    
        const{fullName,username,password,gender,} = req.body;
        if (!fullName || !username || !password || !gender) {  
            return next(new errorHandler("all  field are required ",400))
              
        }
        const user = await User.findOne({username});
        if(user){
            return next(new errorHandler("user already exist ",400))
        }
        const newUser = await User.create({
            username,
            fullName,
            password,
            gender,
        })
        
        res.send("hello register")
    })
export const login = (req,res,next)=>{
    res.send("i m login")
}


