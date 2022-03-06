const fs = require('fs');

const input = fs.readFileSync('./sample.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const list = input[1].split(' ');

function solution(list) {
    console.log(Math.min(...list), Math.max(...list))
}

solution(list);