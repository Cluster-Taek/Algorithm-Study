import fetch from "node-fetch";

const spelling = ['H', 'I', 'L', 'C', 'A', 'M', 'E'];

function recursive(spelling, current, number) {
    if (number == 0) {
        return current;
    }
    current += spelling[Math.floor(Math.random() * spelling.length)];
    return recursive(spelling, current, number - 1)
}

const getResult = (count) => {
    let history = [];

    while (history.length < count) {
        let word = recursive(spelling, 'L', 3);

        if (word.includes(spelling[0]) && !history.includes(word)) {
            history.push(word);
        }
    }

    history.sort();
    return history;
}

console.log(getResult(49))
