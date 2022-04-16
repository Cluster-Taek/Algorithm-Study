const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = ''

rl.on('line', function (line) {
    input = Number(line)
}).on('close', function () {

    solution(input)

    process.exit();
})

function solution(input) {
    if (input < 2) {
        console.log(1)
    } else {
        let result = 0;
        while (true) {
            result++;

            if (3 * (result * (result + 1)) + 1 >= input) {
                break;
            }
        }

        console.log(result + 1)
    }
}