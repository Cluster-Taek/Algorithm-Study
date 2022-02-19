function solution(s) {

    const table = {    
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    }

    const keys = Object.keys(table);

    keys.map((key) => {
        s = s.replace(new RegExp(key, "gi"), table[key]);
    })

    return s * 1;
}

const testCase = [
    {
        "s" : "one4seveneight",
        "result" : 1478
    },
    {
        "s" : "23four5six7",
        "result" : 234567
    },
    {
        "s" : "2three45sixseven",
        "result" : 234567
    },
    {
        "s" : "123",
        "result" : 123
    },
]

testCase.map((test) => {
    const result = solution(test.s);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.s);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})