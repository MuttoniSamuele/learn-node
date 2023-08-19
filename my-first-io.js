const fs = require("fs");

const str = String(fs.readFileSync(process.argv[2]));
let sum = 0;
for (const c of str){
    if (c === "\n") {
        sum += 1;
    }
}
console.log(sum);
