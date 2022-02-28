function solution(board, moves) {
    let answer = 0;

    moves.map((move) => {
        board.map((row) => {
            if(row[move + 1] == 0) {
                
            }
        })
    })
    

    return answer;
}

const testCase = [
    {
        "board" : [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],
        "moves" : [1,5,3,5,1,2,1,4],
        "result" : 4
    }
]

testCase.map((test) => {
    const result = solution(test.board, test.moves);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.board, '|', test.moves);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
})