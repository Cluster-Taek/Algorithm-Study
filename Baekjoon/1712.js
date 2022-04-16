const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = ''

rl.on('line', function(line) {
    input = line
}).on('close', function() {

    solution(input)
    
    process.exit();
})

function solution(input) {
    const data = input.split(' ');
    
    if(Number(data[1]) >= Number(data[2])) {
        console.log(-1);
    } else {
        console.log(Math.floor(Number(data[0])/(Number(data[2]) - Number(data[1]))) + 1)
    }
    
}