function solution(answers) {
    let return_value = [];
    
    let answer_count= [0, 0, 0];
    
    const pattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    answers.map((answer, index) => {
        answer_count.map((count, count_index) => {
            pattern[count_index][index % pattern[count_index].length] == answer ? answer_count[count_index] += 1 : null 
        })
    })
    
    answer_count.map((count, count_index) => {
        count == Math.max(...answer_count) ? return_value.push(count_index + 1) : null
    }) 
    
    return return_value;
}

const testCase = [
    {
        "answers" : [1,2,3,4,5],
        "result" : [1]
    },
    {
        "answers" : [1,3,2,4,2],
        "result" : [1,2,3]
    },
]

testCase.map((test) => {
    const result = solution(test.answers);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.answers);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})