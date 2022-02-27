function solution(numbers) {
    let answer = 45;

    numbers.map((number) => {
        answer -= number;
    })

    return answer;
}

const testCase = [
    {
        "numbers" : [1,2,3,4,6,7,8,0],
        "result" : 14
    },
    {
        "numbers" : [5,8,4,0,6,7,9],
        "result" : 6
    }
]

testCase.map((test) => {
    const result = solution(test.numbers);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.numbers);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})