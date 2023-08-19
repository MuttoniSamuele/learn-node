const filteredLs = require("./mymodule");

const [dirPath, ext] = process.argv.slice(2);
filteredLs(dirPath, ext, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach((f) => console.log(f));
});
