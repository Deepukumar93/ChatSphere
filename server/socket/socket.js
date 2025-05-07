import dotenv from 'dotenv'
dotenv.config();
import { Server } from "socket.io";
import https from "https";
import express from "express";

const app = express();

const server = https.createServer(app);

console.log(process.env.CLIENT_URL); // This will throw an error if 'first' is not defined

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

// io.on("connection", (socket)=>{
//         console.log(socket.id)
// })

// export {io,app,server}