const fs = require("fs");
const path = require("path");

module.exports = function (dirPath, ext, cb) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            cb(err, []);
            return;
        }
        cb(
            null,
            files.filter((f) => path.extname(f) === `.${ext}`)
        );
    });
}
