const readling = require('readline');
const rl = readling.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let word = 0;

rl.on('line', (line) => {
    word = line;
}).on('close', () => {
    solution(word);
})

function solution(word) {
    let result = '';
    for(let i = 97; i <= 122; i++) {
        result += word.indexOf(String.fromCharCode(i)) + ' '
    }

    console.log(result.trim())
}

