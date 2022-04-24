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
    let apart = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
    for(let i = 1; i < 15; i++) {
        let floor = [1];
        for (let j = 1; j < 15; j++) {
            floor.push(floor[j - 1] + apart[i - 1][j])
        }
        apart.push(floor);
    }

    for (let i = 1; i < input.length; i += 2) {
        console.log(apart[input[i]][input[i + 1] - 1])
    }
}