//implementation findIndex function method

function myFindIndex(array, element) {
    for(let i = 0; i < array.length; i++) {
        let item = array[i];      
        if(item === element) {
            return `The number ${element} in the array index is ${i}`
        }
        if(i === array.length-1) {
            return `${element} is not in array`
        }
    }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myFindIndex(array, 5))
