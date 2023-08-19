const net = require("net");

function fillZeros(n, cnt) {
    const str = String(n);
    return "0".repeat(Math.max(0, cnt - str.length)) + str;
}

function formatDate(date) {
    const ye = fillZeros(date.getFullYear(), 4);
    const mo = fillZeros(date.getMonth() + 1, 2);
    const da = fillZeros(date.getDate(), 2);
    const ho = fillZeros(date.getHours(), 2);
    const mi = fillZeros(date.getMinutes(), 2);
    return `${ye}-${mo}-${da} ${ho}:${mi}\n`;
}

net.createServer((socket) => {
    socket.write(formatDate(new Date()));
    socket.end();
}).listen(process.argv[2]);
