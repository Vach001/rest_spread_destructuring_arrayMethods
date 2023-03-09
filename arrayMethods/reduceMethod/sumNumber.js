//- Given an array, return the sum of numbers that are 18 or over.
function sumToGreaterThanNumber (array) {

    return array.filter((number) => number >= 18).reduce((sum, currentIndex) => sum += currentIndex);
};

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
 
console.log(sumToGreaterThanNumber(arr)) // 22 + 55 + 166 + 36 + 205 + 333 + 95 + 62 + 43 = 1017