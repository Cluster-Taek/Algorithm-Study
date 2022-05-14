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
    const number = input[1].split(' ').filter(item => prime(Number(item)));

    console.log(number.length)
}

const prime = (number) => {
    if(number == 1) {
        return false;
    }
    for(let i = 2; i < number; i++) {
        if(number % i == 0) {
            return false;
        }
    }
    return true;
}