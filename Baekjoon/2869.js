const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    line.split(' ').map((item) => {
        input.push(Number(item))
    });
}).on('close', function () {

    solution(input)

    process.exit();
})

function solution(input) {
    console.log(Math.ceil((input[2] - input[0])/(input[0] - input[1]) + 1));
}