function solution(alp, cop, problems) {
    // problems = {alp_req, cop_req, alp_rwd, cop_rwd, cost}

    let current_time = 0;

    const MAX_ALP = problems.reduce((previous, current) => previous[0] > current[0] ? previous : current)[0];
    const MAX_COP = problems.reduce((previous, current) => previous[1] > current[1] ? previous : current)[1];

    const min_array = [...problems].sort((previous, current) => previous[0] + previous[1] - current[0] - current[1]);

    const alp_eff_array = [...problems].sort((previous, current) => current[2] / current[4] - previous[2] / previous[4]);
    const cop_eff_array = [...problems].sort((previous, current) => current[3] / current[4] - previous[3] / previous[4]);

    while (alp + alp_eff_array[1][2] <= MAX_ALP && cop + cop_eff_array[1][3] <= MAX_COP) {
        const alp_possible_array = alp_eff_array.filter((item) => item[0] <= alp && item[1] <= cop);
        const cop_possible_array = cop_eff_array.filter((item) => item[0] <= alp && item[1] <= cop);

        if (alp_possible_array.length == 0) {
            current_time += (min_array[0][0] - alp);
            current_time += (min_array[0][1] - cop);
            alp = min_array[0][0];
            cop = min_array[0][1];
        } else {
            if (MAX_ALP - alp > MAX_COP - cop) {
                current_time += alp_possible_array[0][4];
                alp += alp_possible_array[0][2];
                cop += alp_possible_array[0][3];
            } else {
                current_time += cop_possible_array[0][4];
                alp += cop_possible_array[0][2];
                cop += cop_possible_array[0][3];
            }
        }

    }



    return current_time;
}

const testCase = [
    {
        "alp": 10,
        "cop": 10,
        "problems": [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]],
        "result": 15
    },
    {
        "alp": 0,
        "cop": 0,
        "problems": [[0, 0, 2, 1, 2], [4, 5, 3, 1, 2], [4, 11, 4, 0, 2], [10, 4, 0, 4, 2]],
        "result": 13
    }
]

testCase.forEach((test) => {
    console.log("-------------------------------------------")
    const result = solution(test.alp, test.cop, test.problems);
    console.log("입력값 )", test.alp + " | " + test.cop + " | " + test.problems);
    console.log("기댓값 )", test.result);
    console.log("실행 결과 )", result);
    console.log("-------------------------------------------")
})