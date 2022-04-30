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
    let three = 0;
    while (true) {
        if (three > input) {
            console.log(-1);
            return;
        }
        if ((input - three) % 5 == 0) {
            break;
        }
        three += 3;
    }
    console.log((input - three) / 5 + three / 3)
}