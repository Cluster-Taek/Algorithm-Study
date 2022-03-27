const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = ''

rl.on('line', function(line) {
    input = line;
}).on('close', function() {

    solution(input)
    
    process.exit();
})

function solution(input) {
    const A = Number(input.split(' ')[0].split('').reverse().join(''));
    const B = Number(input.split(' ')[1].split('').reverse().join(''));
    
    A > B ? console.log(A) : console.log(B)
}