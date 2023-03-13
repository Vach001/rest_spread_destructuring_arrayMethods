//implementation findIndex function method

function myFindIndex(array, element) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === element) {
            return i;
        }
    }
    return -1;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myFindIndex(array, 5))
