function solution(bricks, n, k) {
    let answer = 0;

    bricks[0] = -1;
    bricks[bricks.length - 1] = -1;

    while(k > 1) {
        const max = Math.max(...bricks)
        answer += (n - max);
        bricks.splice(bricks.indexOf(max) - 1, 3, -1, -1, -1)
        k -= 1;
    }

    return answer;
}

const testCase = [
    {
        "bricks" : [1, 2, 5, 3, 1, 0, 2, 3],
        "n" : 6,
        "k": 3,
        "result" : 5
    },
    {
        "bricks" : [0, 1, 2, 3, 4],
        "n" : 5,
        "k": 2,
        "result" : 2
    },
    {
        "bricks" : [0, 1, 2, 3, 4, 3],
        "n" : 5,
        "k": 2,
        "result" : 1
    },
]

testCase.map((test) => {
    const result = solution(test.bricks, test.n, test.k);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.bricks + " | " + test.n + " | " + test.k)
    console.log("기댓값 )", test.result)
    console.log("실행 결과 )", result)
})