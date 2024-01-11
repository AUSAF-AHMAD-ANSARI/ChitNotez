const express = require('express');
const path = require('path');
const router = express.Router();
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(router);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Connected...');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    });
});

router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '..', '..', 'chat.ejs');
    res.sendFile(indexPath);
});

module.exports = router;