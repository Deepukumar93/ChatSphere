import mongoose from 'mongoose';

export const connectDB = async ()=>{
try{
    const MONGODB_URL = process.env.MONGODB_URL
const instanse = await mongoose.connect(MONGODB_URL)
console.log(`momngodb connected: ${instanse.connection.host}`)
}catch(error){
console.log(error)
}
}