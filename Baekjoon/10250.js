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
    const T = Number(input[0]);

    input.forEach((item, index) => {
        if (index > 0) {
            const [H, W, N] = item.split(' ').map(Number);
            console.log((N % H == 0 ? H : N % H) * 100 + Math.ceil(N / H));
        }
    });
}