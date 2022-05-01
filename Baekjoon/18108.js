const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = 0;

rl.on('line', function (line) {
    input = Number(line)
}).on('close', function () {

    solution(input)

    process.exit();
})

function solution(input) {
    console.log(input - (2541 - 1998))
}