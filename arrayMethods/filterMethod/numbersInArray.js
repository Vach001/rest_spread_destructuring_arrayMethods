//- Given an array, return a new array that only includes the numbers.

function getNumbersInArray(newArray) {

    return newArray.filter((item) => item / 1 === item);
};

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];

console.log(getNumbersInArray(arr));    // [1, 2, 55, 166]