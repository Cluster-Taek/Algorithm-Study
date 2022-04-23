const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    line ? input.push(line) : rl.close()
}).on('close', function () {

    solution(input)

    process.exit();
})

function solution(input) {
    const [A, B] = input[0].split(' ').map(BigInt);
    console.log((A + B).toString())
}