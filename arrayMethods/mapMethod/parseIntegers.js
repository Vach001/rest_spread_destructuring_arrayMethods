//- Write a function which parses string integers. If it's not possible to parse, then add null

function parseInteger(mixArray) {
    return mixArray.map((number) => {
        if (+number === +number || +number === 0) {
            return +number;
        }
        else {
            return null;
        }
    });
};
const firstArray = ["1", "2", "34"];
const secondArray = ["1", "px", "2323"];

console.log(parseInteger(firstArray));     // [1, 2, 34];
console.log(parseInteger(secondArray));    // [1, null, 2323];