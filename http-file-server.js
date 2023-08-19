const http = require("http");
const fs = require("fs");

const [port, file] = process.argv.slice(2);

http.createServer((req, res) => {
    const readStream = fs.createReadStream(file);
    readStream.pipe(res);
}).listen(port);
