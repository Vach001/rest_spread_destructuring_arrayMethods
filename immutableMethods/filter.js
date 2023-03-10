//implementation filter function method

function myFilter (array, action = () => {}) {
    const newArray = [];

    for(let i = 0; i <= array.length-1; i++) {
        let currentItem = array[i];

        if(action(currentItem)) {

            newArray.push(currentItem);
        }
    }
    return newArray;
};

const myArray = [9, 8, 7, 6, 5, 4, 3];

console.log(myFilter(myArray)); 