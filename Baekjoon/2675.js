const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function(line) {
    line ? input.push(line) : rl.close()
}).on('close', function() {

    solution(input)
    
    process.exit();
})

function solution(input) {
    const T = Number(input[0]);

    for(let index = 1; index <= T; index++) {
        
        let result = '';

        let R = Number(input[index].split(' ')[0]);
        let S = input[index].split(' ')[1];

        S.split('').map((char) => {
            for(let i = 0; i < R; i++) {
                result += char;
            }
        })

        console.log(result);
    }
}