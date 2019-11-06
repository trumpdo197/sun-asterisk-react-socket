const socket = require('./socket');

socket.on('connection', () => {
    socket.emit('welcome', 'Kết nối rồi babe');
})
