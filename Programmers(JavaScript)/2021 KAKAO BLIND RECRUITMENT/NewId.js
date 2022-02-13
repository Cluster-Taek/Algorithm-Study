function solution(new_id) {
    let answer = new_id;

    // 1
    answer = answer.toLowerCase();

    // 2
    const reg = new RegExp(/[^a-z|0-9|\-|\_|\.]/g);
    answer = answer.replace(reg, '');

    // 3
    while(answer.includes('..')) {
        answer = answer.replace(new RegExp(/\.\./g), '.');
    }
    
    // 4
    answer = answer[0] == '.' ? answer.slice(1) : answer
    answer = answer[answer.length - 1] == '.' ? answer.slice(0, answer.length - 1) : answer

    // 5
    answer = answer == "" ? "a" : answer

    // 6
    answer = answer.slice(0, 15);
    answer = answer[answer.length - 1] == '.' ? answer.slice(0, answer.length - 1) : answer

    // 7
    while(answer.length < 3) {
        answer += answer[answer.length - 1]
    }

    return answer;
}

const testCase = [
    {
        "new_id" : "...!@BaT#*..y.abcdefghijklm",
        "result" : "bat.y.abcdefghi"
    },
    {
        "new_id" : "z-+.^.",
        "result" : "z--"
    },{
        "new_id" : "=.=",
        "result" : "aaa"
    },{
        "new_id" : "123_.def",
        "result" : "123_.def"
    },{
        "new_id" : "abcdefghijklmn.p",
        "result" : "abcdefghijklmn"
    },
]

testCase.map(({new_id, result}) => {
    const real_result = solution(new_id);
    console.log("-------------------------------------------")
    console.log("입력값 )", new_id)
    console.log("기댓값 )", result)
    console.log("실행 결과 )", real_result)
})