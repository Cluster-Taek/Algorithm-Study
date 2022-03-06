const fs = require('fs');

const input = fs.readFileSync('./sample.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const list = [];
input.map((data) => {
    list.push(data * 1);
})

function solution(list) {
    const max = Math.max(...list)
    console.log(max + '\n' + list.indexOf(max) + 1)
}

solution(list);