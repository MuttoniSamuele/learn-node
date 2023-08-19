const http = require("http");

Promise.all(process.argv.slice(2, 6).map((url) => new Promise((resolve, reject) => {
    let allData = "";
    http.get(url, (res) => {
        res.setEncoding("utf8");
        res.on("data", (data) => allData += data);
        res.on("error", reject);
    })
    .on("error", reject)
    .on("close", () => resolve(allData));
})))
.then((dataArr) => {
    dataArr.forEach((data) => console.log(data));
})
.catch(console.log);
