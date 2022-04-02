function solution(grid) {
    let answer = 0;

    const count = JSON.stringify(grid).match(/\?/g).filter(function (item) { return item !== ''; }).length;
    const list = permitetion([['a'], ['b'], ['c']], count);

    let gridList = [];

    list.map((row) => {
        let new_grid = JSON.stringify(grid)
        row.map((data) => {
            new_grid = new_grid.replace('?', data);
        })
        gridList.push(JSON.parse(new_grid))
    })

    gridList.map((row) => {
        if (isConnected(row)) {
            answer++;
        }
    })

    return answer;
}

function permitetion(row, number) {
    if (number == 1) {
        return row;
    }
    let new_row = [];

    for (let i = 0; i < row.length; i++) {
        new_row.push([...row[i], 'a'])
        new_row.push([...row[i], 'b'])
        new_row.push([...row[i], 'c'])
    }

    return permitetion(new_row, number - 1);
}

function isConnected(grid) {
    let a_position = [];
    let b_position = [];
    let c_position = [];

    const gridList = [];
    grid.map((row) => {
        gridList.push(row.split(''))
    })

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            gridList[i][j] == 'a' ? a_position.push([i, j]) : gridList[i][j] == 'b' ? b_position.push([i, j]) : c_position.push([i, j])
        }
    }

    if (!isPositionConnected(a_position)) {
        return false;
    }
    if (!isPositionConnected(b_position)) {
        return false;
    }
    if (!isPositionConnected(c_position)) {
        return false;
    }


    return true;
}

function isPositionConnected(position) {
    if (position.length < 2) {
        return true;
    }

    let new_position = JSON.stringify(deletePosition(position, position[0]));

    new_position = new_position.replace(/\[|\]|\,/g, '');

    if (new_position == "") {
        return true;
    }

    return false
}

function deletePosition(position, node) {
    const current_index = isItemInArray(position, node)

    let new_position = JSON.stringify(position)

    if(current_index < 0) {
        return JSON.parse(new_position);
    }


    const candidate = [
        [position[current_index][0], position[current_index][1] + 1],
        [position[current_index][0], position[current_index][1] - 1],
        [position[current_index][0] - 1, position[current_index][1]],
        [position[current_index][0] + 1, position[current_index][1]],
    ];

    let can_index = -1;
    candidate.map((row, index) => {
        if (new_position.includes(JSON.stringify(row))) {
            can_index = index;
        }
    })

    new_position = new_position.replace(JSON.stringify(node), "[]")
    return deletePosition(JSON.parse(new_position), candidate[can_index]);
}

function isItemInArray(array, item) {
    if(!item) {
        return -1;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return i;
        }
    }

    return -1;
}

const grid1 = ["abcabcab", "????????"];
const grid2 = ["aa?"];


console.log(solution(grid1))


