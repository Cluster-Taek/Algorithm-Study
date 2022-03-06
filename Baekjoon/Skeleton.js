const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function(line) {
    line ? input.push(line * 1) : rl.close()
}).on('close', function() {

    solution(input)
    
    process.exit();
})

function solution(input) {
    console.log(input)
}