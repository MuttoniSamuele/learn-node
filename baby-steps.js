let sum = 0;
for (let arg of process.argv.slice(2)) {
    sum += parseFloat(arg);
}
console.log(sum);
