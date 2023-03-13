function concatenateArrays (arrayOne, arrayTwo) {

    return [...arrayOne, ...arrayTwo];
}

const arrFirst = [1, 2, 3, 4];
const arrSecond = [5, 6, 7, 8, 9];
const getResult = concatenateArrays(arrFirst, arrSecond); 

console.log(getResult);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
