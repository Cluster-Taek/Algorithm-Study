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
        console.log(`1/1`)
    } else {
        let line = 0;
        while (true) {
            line++;

            if ((line * (line + 1)) / 2 >= input) {
                break;
            }
        }

        const index = input - (line * (line - 1)) / 2;

        const result = line % 2 == 1 ? `${line + 1 - index}/${index}` : `${index}/${line + 1 - index}`

        console.log(result)

    }
}