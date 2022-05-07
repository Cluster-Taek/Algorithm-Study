function solution(rc, operations) {
    let answer = [];
    DeepCopy(answer, rc);

    let ShiftRowClearString = "";
    let RotateClearString = "";

    rc.forEach(row => ShiftRowClearString +='"ShiftRow",')
    for(let i = 0; i < ((rc.length + rc[0].length - 1) * 2); i++) {
        RotateClearString += '"Rotate",'
    }

    const shift_reg = new RegExp(ShiftRowClearString, "g")
    const rotate_reg = new RegExp(RotateClearString, "g")

    JSON.parse(JSON.stringify(operations).replace(shift_reg, "").replace(rotate_reg, "")).forEach(oper => {
        console.log(oper)
        answer = oper === "ShiftRow" ? ShiftRow(answer) : oper === "Rotate" ? Rotate(answer) : null
    })

    return answer;
}

const DeepCopy = (current, prev) => {
    [...prev].forEach(row => {
        current.push([...row])
    })
}

const ShiftRow = (rc) => {
    let table = [];
    DeepCopy(table, rc);

    table.unshift(table.pop());
    return table;
}

const Rotate = (rc) => {
    let table = [];
    DeepCopy(table, rc);

    rc.forEach((row, x) => {
        row.forEach((item, y) => {
            if (x === 0) {
                if (y === rc[0].length - 1) {
                    table[x + 1][y] = item;
                } else {
                    table[x][y + 1] = item;
                }
            } else if (x === rc.length - 1) {
                if (y === 0) {
                    table[x - 1][y] = item;
                } else {
                    table[x][y - 1] = item;
                }
            } else if (y === 0) {
                table[x - 1][y] = item;
            } else if (y === rc[0].length - 1){
                table[x + 1][y] = item;
            }
        })
    })

    return table;
}



const testCase = [
    {
        "rc": [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        "operations": ["Rotate", "ShiftRow"],
        "result": [[8, 9, 6], [4, 1, 2], [7, 5, 3]]
    },
    {
        "rc": [[8, 6, 3], [3, 3, 7], [8, 4, 9]],
        "operations": ["Rotate", "ShiftRow", "ShiftRow"],
        "result": [[8, 3, 3], [4, 9, 7], [3, 8, 6]]
    },
    {
        "rc": [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
        "operations": ["ShiftRow", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate","Rotate","Rotate","Rotate","Rotate","Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate", "Rotate","Rotate","Rotate","Rotate","Rotate","Rotate","Rotate","Rotate","Rotate","ShiftRow", "Rotate", ],
        "result": [[1, 6, 7, 8], [5, 9, 10, 4], [2, 3, 12, 11]]
    }
]

testCase.forEach((test) => {
    console.log("-------------------------------------------")
    const result = solution(test.rc, test.operations);
    console.log("입력값 )", test.rc + " | " + test.operations);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
    console.log("-------------------------------------------")
})