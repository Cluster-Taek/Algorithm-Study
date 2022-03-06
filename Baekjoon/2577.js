const fs = require('fs');

const input = fs.readFileSync('./sample.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0] * 1;
const b = input[1] * 1;
const c = input[2] * 1;

function solution(a, b, c) {
    const num = (a * b * c) + '';

    for (let index = 0; index < 10; index++) {
        console.log(num.match(new RegExp(index, 'g')) ? num.match(new RegExp(index, 'g')).length : 0);
    }
}

solution(a, b, c);