function solution(money, costs) {

    let result = 0;
    let result_table = [];
    let costs_table = [];

    costs.map((cost, index) => {
        if(index == 0) {
            costs_table.push([1, cost, cost])
        } else if(index == 1) {
            costs_table.push([5, cost, cost/5])
        } else if(index == 2) {
            costs_table.push([10, cost, cost/10])
        } else if(index == 3) {
            costs_table.push([50, cost, cost/50])
        } else if(index == 4) {
            costs_table.push([100, cost, cost/100])
        } else {
            costs_table.push([500, cost, cost/500])
        }
    });

    costs_table.sort((a, b) => a[2] - b[2])

    costs_table.map((row) => {
        result_table.push([row[1], Math.floor(money / row[0])])
        money = money % row[0]
    })

    result_table.map((row) => {
        result += row[0] * row[1]
    })

    return result;
}

const testCase = [
    {
        "money": 4578,
        "costs": [1, 4, 99, 35, 50, 1000],
        "result": 2308
    },
    {
        "money": 1999,
        "costs": [2, 11, 20, 100, 200, 600],
        "result": 2798
    },
]

testCase.map((test) => {
    const result = solution(test.money, test.costs);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.money + "|" + test.costs);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})
