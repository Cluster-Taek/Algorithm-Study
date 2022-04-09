const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function(line) {
    line ? input.push(line) : rl.close()
}).on('close', function() {

    solution(input)
    
    process.exit();
})

function solution(input) {
    let result = 0;
    const N = Number(input[0]);
    for(let i = 1; i < N + 1; i++) {
        let flag = true;

        let word_list = input[i].split('');

        for(let j = 0; j < word_list.length; j++) {
            let flag = false;
            let current_index = 0;
            for(let k = j + 1; k < word_list.length; k++) {
                if(word_list[j] == word_list[k]) {
                    if(current_index == k - 1) {
                        current_index = k;
                    } else {
                        flag = false;
                        current_index = 0;
                        break;
                    }
                    
                }
            }
            
        }

        if(flag) {
            result ++;
        }
    }

    console.log(result);
}