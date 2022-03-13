const readling = require('readline');
const rl = readling.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let n = 0;

rl.on('line', (line) => {
    n = Number(line);
}).on('close', () => {
    solution(n);
})

function solution(n) {

    let result = [];
    for (let i = 1; i <= n; i++) {
        String(i).length < 3 ? result.push(i) : judge(i) ? result.push(i) : null
    }

    console.log(result.length)
}

function judge(number) {
    return Number(String(number).split('')[2]) - Number(String(number).split('')[1]) == Number(String(number).split('')[1]) - Number(String(number).split('')[0])
}

