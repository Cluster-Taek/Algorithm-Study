const readling = require('readline');
const rl = readling.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let result = 0;
    let N = Number(input[0]);
    
    const numberlist = input[1].split('');

    numberlist.map((number) => {
        result += Number(number)
    })

    console.log(result)
    process.exit()
})
