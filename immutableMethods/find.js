//implementation find function method

function myFind (array, element) {
    for(let i = 0; i<array.length; i++) {
        let item = array[i];

        if(item === element) {
            return item;
        }
        if(i === array.length-1) {
            return 'undefined';
        }
    }
};
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(myFind(array, 5));