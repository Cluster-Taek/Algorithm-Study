function solution(scores) {
    let answer = [];
    let sum = [0, 0];

    scores.forEach((score, index) => {
        sum[0] += score[0];
        sum[1] += score[1];
        score.unshift(index);
    })

    const hard = sum[0] < sum[1] ? 1 : sum[0] > sum[1] ? 2 : -1;

    scores.sort((a, b) => {
        if (a[1] + a[2] < b[1] + b[2]) {
            return 1;
        } else if (a[1] + a[2] > b[1] + b[2]) {
            return -1;
        } else if (hard > 0 && a[hard] < b[hard]) {
            return 1;
        } else if (hard > 0 && a[hard] > b[hard]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return -1;
        }
    })

    scores.forEach((score, index) => {
        answer[score[0]] = index + 1
    })

    return answer;
}