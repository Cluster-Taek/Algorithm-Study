function solution() {
    let result = [];
    for(let i = 1; i <= 10000; i++) {
        result.push(i)
    }

    for(let i = 1; i <= 10000; i++) {
        let number = i;
        (i + '').split('').map((num) => number += Number(num))
        result.indexOf(number) > 0 ? result.splice(result.indexOf(number), 1) : null
    }
    result.map((row) => {
        console.log(row)
    })
}

solution();