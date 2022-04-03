const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = '';

rl.on('line', function (line) {
    input = line;
}).on('close', function () {

    solution(input)

    process.exit();
})

function solution(input) {
    const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

    croatia.map((data) => {
        const regex = new RegExp(data, 'g');
        input = input.replace(regex, '*');
    })
    
    console.log(input.length)
}