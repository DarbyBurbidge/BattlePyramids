import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = 5000 
const app = express()
const server = createServer(app)
const io = new Server(server)


io.on('connection', socket => {
    socket.emit('request', {message: "connected"})
    socket.on('disconnect', () => {
        console.log("disconnected")
    })
})

server.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`) })