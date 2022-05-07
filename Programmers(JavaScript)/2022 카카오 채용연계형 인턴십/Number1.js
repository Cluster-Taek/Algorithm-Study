function solution(survey, choices) {
    let answer = '';

    let MBTI = {
        "RT": 0,
        "CF": 0,
        "JM": 0,
        "AN": 0,
    }

    survey.forEach((question, index) => {
        MBTI.hasOwnProperty(question) ? MBTI[question] += (choices[index] - 4) : MBTI[question.split("").reverse().join("")] -= (choices[index] - 4)
    })

    for(key in MBTI){
        MBTI[key] <= 0 ? answer += key.split("")[0] : answer += key.split("")[1]
    }

    return answer;
}

const testCase = [
    {
        "survey": ["AN", "CF", "MJ", "RT", "NA"],
        "choices": [5, 3, 2, 7, 5],
        "result": "TCMA"
    },
    {
        "survey": ["TR", "RT", "TR"],
        "choices": [7, 1, 3],
        "result": "RCJA"
    },
]

testCase.forEach((test) => {
    const result = solution(test.survey, test.choices);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.survey + " | " + test.choices);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})