const readling = require('readline');
const rl = readling.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let T = Number(input[0])
    
    for (let i = 1; i <= T; i++) {11
        
        let N = input[i].split(' ')[0];

        let sum = 0;
        let result = 0;

        for (let j = 1; j <= N; j++) {
            sum += Number(input[i].split(' ')[j]);
        }

        for (let j = 1; j <= N; j++) {
            input[i].split(' ')[j] > sum / N ? result++ : null
        }

        console.log((result / N * 100).toFixed(3) + '%')
    }

    process.exit()
})
