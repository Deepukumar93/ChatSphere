import dotenv from 'dotenv'
dotenv.config();
import  express from 'express';
import { connectDB } from './db/connection1.db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
connectDB();

const app = express();
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }));
  

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000;
// console.log(PORT)

// routes
    import userRoute from './routes/user.route.js'
    import messageRoute from "./routes/message.route.js"
    app.use('/api/v1/user',userRoute)
    app.use('/api/v1/message',messageRoute)

// error middleware
import { errorMiddleware } from './middlewares/error.middleware.js';
app.use(errorMiddleware);



app.listen(PORT, ()=>{
    console.log(` server start at port ${PORT}`)
})

