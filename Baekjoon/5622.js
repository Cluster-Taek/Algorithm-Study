const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = '';

rl.on('line', function(line) {
    input = line;
}).on('close', function() {

    solution(input)
    
    process.exit();
})

function solution(input) {
    let result = 0;

    const dialList = {
        'A' : 2,
        'B' : 2,
        'C' : 2,
        'D' : 3,
        'E' : 3,
        'F' : 3,
        'G' : 4,
        'H' : 4,
        'I' : 4,
        'J' : 5,
        'K' : 5,
        'L' : 5,
        'M' : 6,
        'N' : 6,
        'O' : 6,
        'P' : 7,
        'Q' : 7,
        'R' : 7,
        'S' : 7,
        'T' : 8,
        'U' : 8,
        'V' : 8,
        'W' : 9,
        'X' : 9,
        'Y' : 9,
        'Z' : 9
    }
    const dial = input.split('');

    dial.map((data) => {
        result += Number(dialList[data] + 1);
    })

    console.log(result)
}