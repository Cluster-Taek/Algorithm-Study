const readling = require('readline');
const rl = readling.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let char = 0;

rl.on('line', (line) => {
    char = line;
}).on('close', () => {
    solution(char);
})

function solution(char) {
    console.log(char.charCodeAt(0))
}

