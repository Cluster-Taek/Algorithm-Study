function solution(n, text, second) {

    let hide = text.split('').map(item => item == ' ' ? '_' : item);
    let show = [];
    for(let i = 0; i < n; i++) {
        show.push('_')
    }
    
    for(let i = 0; i < second; i++) {
        hide.push(show.shift())
        show.push(hide.shift())
    }

    return show.join('');
}

const testCase = [
    {
        "n" : 6,
        "text" : "hi bye",
        "second": 1,
        "result" : "_____h"
    },
    {
        "n" : 6,
        "text" : "hi bye",
        "second": 2,
        "result" : "____hi"
    },
    {
        "n" : 6,
        "text" : "hi bye",
        "second": 6,
        "result" : "hi_bye"
    },
]

testCase.map((test) => {
    const result = solution(test.n, test.text, test.second);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.n + " | " + test.text + " | " + test.second)
    console.log("기댓값 )", test.result)
    console.log("실행 결과 )", result)
})