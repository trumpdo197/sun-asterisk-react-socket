const fs = require('fs');
const { getRulesDir } = require(`${appRoot}/bepos-utils`);

module.exports = (req, res) => {
    res.send(JSON.parse(fs.readFileSync(getRulesDir(req.query.fileId))));
}
