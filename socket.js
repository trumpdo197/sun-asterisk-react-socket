const io = require('socket.io');
const PORT = 69;

const server = require('http').createServer();
server.listen(PORT);

module.exports = io(server);
