function solution(absolutes, signs) {
    let result = 0;
    absolutes.map((ab, index) => {
        signs[index] ? result += ab : result -= ab;
    })
    return result;
}

const testCase = [
    {
        "absolutes": [4, 7, 12],
        "signs": [true, false, true],
        "result": 9
    },
    {
        "absolutes": [1, 2, 3],
        "signs": [false, false, true],
        "result": 0
    }
]

testCase.map((test) => {
    const result = solution(test.absolutes, test.signs);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.absolutes + " | " + test.signs);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})