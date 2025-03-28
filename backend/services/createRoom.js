import express from 'express'
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Change this to your frontend URL
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join-room", (roomId, userId) => {
        socket.join(roomId);
        console.log(`User ${userId} joined room ${roomId}`);

        socket.to(roomId).emit("user-connected", userId);

        socket.on("disconnect", () => {
            console.log(`User ${userId} left room ${roomId}`);
            socket.to(roomId).emit("user-disconnected", userId);
        });
    });
});

server.listen(5000, () => console.log("Server running on port 5000"));
