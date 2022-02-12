function solution(lottos, win_nums) {
    let max_rate = 0;
    let min_rate = 0;

    lottos.map((num) => {

        if(win_nums.includes(num) || num == 0) {
            max_rate += 1;
        }

        if(win_nums.includes(num)) {
            min_rate += 1;
        }
    })

    return [max_rate == 0 ? 6 : 7 - max_rate, min_rate == 0 ? 6 : 7 - min_rate];
}

const testCase = [
    {
        "lottos" : [44, 1, 0, 0, 31, 25],
        "win_nums" : [31, 10, 45, 1, 6, 19],
        "result" : [3, 5]
    },
    {
        "lottos" : [0, 0, 0, 0, 0, 0],
        "win_nums" : [38, 19, 20, 40, 15, 25],
        "result" : [1, 6]
    },
    {
        "lottos" : [45, 4, 35, 20, 3, 9],
        "win_nums" : [20, 9, 3, 45, 4, 35],
        "result" : [1, 1]
    },
]

testCase.map(({lottos, win_nums, result}) => {
    const re = solution(lottos, win_nums);
    console.log("-------------------------------------------")
    console.log("입력값 )", lottos + " | " + win_nums)
    console.log("기댓값 )", result)
    console.log("실행 결과 )", re)
})

