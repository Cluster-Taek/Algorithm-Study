function solution(numbers, hand) {
    const keypad = [
        [3, 1],
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
        [3, 0],
        [3, 2]
    ]
    let left = 10;
    let right = 11;

    let answer = "";
    numbers.map((number) => {
        if(number == 1 || number == 4 || number == 7) {
            answer += "L";
            left = number;
        } else if(number == 3 || number == 6 || number == 9) {
            answer += "R";
            right = number;
        } else {
            const left_distance = Math.abs(keypad[number][0] - keypad[left][0]) + Math.abs(keypad[number][1] - keypad[left][1]);
            const right_distance = Math.abs(keypad[number][0] - keypad[right][0]) + Math.abs(keypad[number][1] - keypad[right][1]);
            if(left_distance < right_distance) {
                answer += "L";
                left = number;
            } else if(left_distance > right_distance){
                answer += "R";
                right = number;
            } else if(hand == "left"){
                answer += "L";
                left = number;
            } else {
                answer += "R";
                right = number;
            }
        }
    })

    return answer;
}

const testCase = [
    {
        "numbers" : [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
        "hand" : "right",
        "result" : "LRLLLRLLRRL"
    },
    {
        "numbers" : [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
        "hand" : "left",
        "result" : "LRLLRRLLLRR"
    },
    {
        "numbers" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        "hand" : "right",
        "result" : "LLRLLRLLRL"
    }
]

testCase.map((test) => {
    const result = solution(test.numbers, test.hand);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.numbers, '|', test.hand);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})