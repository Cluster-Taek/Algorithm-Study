function solution(a, b) {
    let answer = 0;

    a.map((element, index) => {
        answer += (element * b[index])
    })

    return answer;
}

const testCase = [
    {
        "a": [1, 2, 3, 4],
        "b": [-3, -1, 0, 2],
        "result": 3
    },
    {
        "a": [-1, 0, 1],
        "b": [1, 0, -1],
        "result": -2
    },
]

testCase.map((test) => {
    const result = solution(test.a, test.b);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.numbers + "|" + test.b);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})