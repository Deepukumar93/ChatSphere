import dotenv from 'dotenv';
dotenv.config();

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

if (!process.env.CLIENT_URL) {
  console.error("❌ CLIENT_URL is not defined in your .env file");
  process.exit(1);
}

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});

// ✅ Global map and utility
const userSocketMap = {};



// ✅ Socket connection
io.on("connection", (socket) => { 
  const userId = socket.handshake.query.userId;
  console.log(socket.handshake.query.userId,"id mil gya")
  if (!userId) return;

  userSocketMap[userId] = socket.id;
  console.log(`✅ Socket connected: ${socket.id}`);
  console.log(Object.keys(userSocketMap),"dono id mil gya")
  io.emit("onlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("onlineUsers", Object.keys(userSocketMap));
  });
});
const getSocketId = (userId) => {
  return userSocketMap[userId];
};

// ✅ Export everything cleanly
export { io, app, server, getSocketId };
