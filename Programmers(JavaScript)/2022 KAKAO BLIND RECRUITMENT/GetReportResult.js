function solution(id_list, report, k) {
    let answer = [];

    let json = {};

    let mailed_json = {};

    id_list.map((id) => {
        json[id] = 0;
        mailed_json[id] = 0;
    })

    // 중복 제거
    const newReport = Array.from(new Set(report));

    // 신고 횟수 json Setting
    newReport.map((row) => {
        const report_data = row.split(' ');
        if (json[report_data[1]] != null) {
            json[report_data[1]] = json[report_data[1]] + 1;
        }
    })

    // 메일 횟수 json Setting
    newReport.map((row) => {
        const report_data = row.split(' ');
        if (json[report_data[1]] >= k) {
            mailed_json[report_data[0]] = mailed_json[report_data[0]] + 1;
        }
    })

    id_list.map((id) => {
        answer.push(mailed_json[id])
    })

    return answer;
}

const testCase = [
    {
        "id_list" : ["muzi", "frodo", "apeach", "neo"],
        "report" : ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
        "k" : 2,
        "result" : [2, 1, 1, 0]
    },
    {
        "id_list" : ["con", "ryan"],
        "report" : ["ryan con", "ryan con", "ryan con", "ryan con"],
        "k" : 3,
        "result" : [0,0]
    }
]

testCase.map((test) => {
    const result = solution(test.id_list, test.report, test.k);
    console.log("-------------------------------------------")
    console.log("입력값 )", test.id_list + " | " + test.report + " | " + test.k)
    console.log("기댓값 )", test.result)
    console.log("실행 결과 )", result)
})