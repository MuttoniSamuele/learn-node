const fs = require("fs").promises;

async function main() {
    const str = String(await fs.readFile(process.argv[2]));
    let sum = 0;
    for (const c of str){
        if (c === "\n") {
            sum += 1;
        }
    }
    console.log(sum);
}
main();
