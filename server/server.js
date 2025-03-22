import  express from 'express';

const app = express();

const PORT = 5000;

// routes
    import userRoute from './routes/user.route.js'
    app.use('/api/v1/user',userRoute)



app.listen(PORT, ()=>{
    console.log(` server start at port ${PORT}`)
})