const fs = require('fs');
const { getRulesDir } = require(appRoot + '/bepos-utils');

module.exports = function (req, res) {
    const rules = req.body.rules;
    const fileId = req.body.fileId;
    const sheetName = req.body.sheetName;

    if (!fileId || !rules || !sheetName) {
        res.send({
            error: true,
            msg: 'Invalid data sent.',
        })
        return;
    }

    const savingData = {
        rules,
        fileId,
        sheetName,
    };

    fs.writeFile(getRulesDir(fileId), JSON.stringify(savingData, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Rules saved.');

        res.send({
            success: true,
            msg: 'Đã lưu quy luật!',
        });
    });
}
