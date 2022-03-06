const fs = require('fs');

const input = fs.readFileSync('./sample.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const list = input[1].split(' ');

function solution(n, list) {
    let result = 0;

    const max = Math.max(...list);

    list.map((data) => {
        result += (data / max * 100)
    })

    console.log(result / n)
}

solution(n, list);