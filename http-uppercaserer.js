const http = require("http");

http.createServer((req, res) => {
    if (req.method !== "POST") {
        return;
    }
    let body = "";
    req.on("data", (data) => {
        body += String(data);
    });
    req.on("end", () => {
        res.write(body.toUpperCase());
    });
}).listen(parseInt(process.argv[2]));
