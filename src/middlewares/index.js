const fs = require('fs');

function logReqRes(fileName) {
  return (req, res, next) => {
    const logString = `${Date.now()} => ${req.method} => path : ${req.path}\n`;
    fs.appendFile(fileName, logString, (err, data) => {
      next();
    });
  };
}
module.exports = {
  logReqRes,
};
