import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import { Server } from "socket.io";
import http from "http";
import express from "express";

// Create express app
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Check if CLIENT_URL is loaded correctly
if (!process.env.CLIENT_URL) {
  console.error("❌ CLIENT_URL is not defined in your .env file");
  process.exit(1); // Exit the process
}

// Create Socket.io server with CORS config
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true, // Important if using cookies/auth
  },
});

const usersocketMap ={

}

// Socket connection
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if(!userId)return

  usersocketMap[userId] = socket.id
  console.log(`✅ Socket connected: ${socket.id}`);
  io.emit("onlineUsers",Object.keys(usersocketMap))
});

// Export the app and server to be used in your main server file
export { io, app, server };
