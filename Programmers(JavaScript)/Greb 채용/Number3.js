function solution(replies, n, k) {
    
    return replies.map(reply => is_error(reply, n, k) ? 0 : 1);
}

const is_error = (reply, n, k) => {
    let num = Math.round(reply.length / k) 
    
    while(num >= n) {
        for(let start = 0; start < num; start++) {
            let sub_array = [];

            for(let i = start; i < reply.length; i += num) {
                sub_array.push(reply.substr(i, num))
            }

            let same_count = 1;

            for(let i = 0; i < sub_array.length - 1; i++) {
                if(sub_array[i] == sub_array[i + 1]) {
                    same_count += 1;
                } else {
                    same_count = 1;
                }
                if(same_count >= k) {
                    return true;
                }
            }
        }

        num--;
    }
    return false;
}


const testCase = [
    {
        "replies" : ["AFFDEFDEFDEEC", "ABABABABBCCEF", "FFFFFFFFFFFFF", "FCBBBFCBBECBB"],
        "n" : 3,
        "k": 2,
        "result" : [0, 0, 0, 1]
    },
    {
        "replies" : ["AFFDEFDEFDEEC", "ABABABABBCCEF", "FFFFFFFFFFFFF", "FCBBBFCBBECBB"],
        "n" : 2,
        "k": 4,
        "result" : [1, 0, 0, 1]
    },
    {
        "replies" : ["FFCCAAFCCAAA", "AAAABBBBCCCC", "ABCABCABCABC"],
        "n" : 4,
        "k": 2,
        "result" : [0, 1, 0]
    },
    {
        "replies" : ["FFCCAAFCCAAA", "AAAABBBBCCCC", "ABCABCABCABC"],
        "n" : 3,
        "k": 3,
        "result" : [1, 1, 0]
    },
]

testCase.map((test) => {
    const result = solution(test.replies, test.n, test.k);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.replies + " | " + test.n + " | " + test.k)
    console.log("기댓값 )", test.result)
    console.log("실행 결과 )", result)
})