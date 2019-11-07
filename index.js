const io = require('./socket');

let ticketBuyingData = {};

io.on('connection', socket => {
    socket.emit('welcome', 'Kết nối rồi babe');

    socket.on('clientJoinTicketBuyingRoom', function(roomId) {
        socket.join(roomId);

        if (roomId in ticketBuyingData === false) {
            ticketBuyingData[roomId] = {};
        };

        socket.emit('onJoinTicketBuyingRoom', ticketBuyingData[roomId]);

        socket.on('clientSeatChoosing', payload => {
            let { x, y, userId } = payload;
c
            userId = !userId ? null : userId;

            if (typeof x !== 'number' || x < 0) return;
            if (typeof y !== 'number' || y < 0) return;

            if (x in ticketBuyingData[roomId] === false) {
                ticketBuyingData[roomId][x] = {};
            }

            if (ticketBuyingData[roomId][x][y] === userId) {
                delete ticketBuyingData[roomId][x][y];
            }
            else {
                ticketBuyingData[roomId][x][y] = userId;
            }

            io.to(roomId).emit('onSeatChoosing', ticketBuyingData[roomId]);
        })
    });
})

setInterval(() => console.log(ticketBuyingData), 5000);
