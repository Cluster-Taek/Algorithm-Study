function solution(id_list, report, k) {
    let answer = [];

    let json = {};

    let mailed_json = {};

    id_list.map((id) => {
        json[id] = 0;
        mailed_json[id] = 0;
    })

    const newReport = Array.from(new Set(report));

    newReport.map((row) => {
        const report_data = row.split(' ');
        if (json[report_data[1]] != null) {
            json[report_data[1]] = json[report_data[1]] + 1;
        }
    })

    id_list.map((id) => {
        newReport.map((row) => {
            const report_data = row.split(' ');
            if (report_data[0] == id && json[report_data[1]] >= k) {
                mailed_json[id] = mailed_json[id] + 1;
            }
        })
    })

    id_list.map((id) => {
        answer.push(mailed_json[id])
    })

    return answer;
}

