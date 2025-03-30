import dotenv from 'dotenv'
dotenv.config();
import  express from 'express';
import { connectDB } from './db/connection1.db.js';
import cookieParser from 'cookie-parser';
connectDB();

const app = express();
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000;
console.log(PORT)

// routes
    import userRoute from './routes/user.route.js'
    app.use('/api/v1/user',userRoute)

// error middleware
import { errorMiddleware } from './middlewares/error.middleware.js';
app.use(errorMiddleware);



app.listen(PORT, ()=>{
    console.log(` server start at port ${PORT}`)
})