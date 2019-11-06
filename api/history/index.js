const fs = require('fs');
const { getLogsDir } = require(appRoot + '/bepos-utils');

module.exports = function (req, res) {
    const fileId = req.query.fileId;

    if (!fileId) res.send('Chưa có cập nhật.');

    const log = fs.readFileSync(getLogsDir(fileId));

    res.send(log);
}
