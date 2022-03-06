const fs = require('fs');

const input = fs.readFileSync('./sample.txt').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const list = [];
input.map((data) => {
    list.push(data * 1);
})

function solution(list) {
    let result = [];

    list.map((data) => {
        const etc = data % 42;
        result.includes(etc) ? null : result.push(etc)
    })
    
    console.log(result.length)
}

solution(list);