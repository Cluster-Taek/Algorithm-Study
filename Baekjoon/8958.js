const fs = require('fs');

const input = fs.readFileSync('./sample.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const list = input.slice(1, input.length);

function solution(list) {
    list.map((data) => {
        let score = 0;
        let pre_char_count = 0;
        data.split('').map((char) => {
            if(char == 'O') {
                score += 1;
                score += pre_char_count;
                pre_char_count += 1;
            } else {
                pre_char_count = 0;
            }
        })
        console.log(score)
    })
}

solution(list);