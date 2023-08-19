const fs = require("fs");
const path = require("path");

const [dirPath, ext] = process.argv.slice(2);

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.filter((f) => path.extname(f) === `.${ext}`)
        .forEach((f) => console.log(f));
});
