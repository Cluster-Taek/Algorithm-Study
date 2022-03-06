const fs = require('fs');

const input = fs.readFileSync('./sample.txt').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const list = input.slice(1, input.length);

function solution(list) {
    list.map((row) => {
        const data = row.split(' ');
        const n = data[0];
        let sum = 0;
        let result = 0;

        for (let index = 1; index < data.length; index++) {
            sum += (data[index] * 1);
        }
        
        for (let index = 1; index < data.length; index++) {
            data[index] > sum/n ? result++ : null
        }

        console.log((result / n * 100).toFixed(3) + '%')
    })
}

solution(list);