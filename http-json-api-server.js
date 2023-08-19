const http = require("http");

http.createServer((req, res) => {
    if (req.method !== "GET") {
        return res.end();
    }
    const url = new URL(req.url, `http://${req.headers.host}`);
    const iso = url.searchParams.get("iso");
    if (!iso) {
        return res.end();
    }
    const date = new Date(iso);
    switch (url.pathname) {
        case "/api/parsetime": {
            return res.end(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }));
        }
        case "/api/unixtime": {
            return res.end(JSON.stringify({
                unixtime: date.getTime(),
            }));
        }
        default: {
            return res.end();
        }
    }
}).listen(parseInt(process.argv[2]));
