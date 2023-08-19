const http = require("http");

let allData = "";

http.get(process.argv[2], (res) => {
    res.setEncoding("utf8");
    res.on("data", (data) => allData += data);
    res.on("error", console.error);
}).on("error", console.error)
    .on("close", () => {
        console.log(allData.length);
        console.log(allData);    
    });
