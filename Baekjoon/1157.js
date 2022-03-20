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
    input = input.toUpperCase();

    let table = {};

    for(let i = 65; i <= 90; i++) {
        table[String.fromCharCode(i)] = 0;
    }

    input.split('').map((char) => {
        table[char]++;
    })

    let array = [];
    for(let data in table) {
        array.push([data, table[data]])
    }
    array.sort((a, b) => b[1] - a[1])
    
    console.log(array[0][1] == array[1][1] ? '?' : array[0][0])
    
}