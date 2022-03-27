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
    if(input.trim() == '') {
        console.log(0)
    } else {
        console.log(input.trim().split(' ').length)
    }
    
}