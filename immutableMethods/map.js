//implementation map function method

function myMap(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};

const example = [1, 11, 2, 22, 3, 33, 333];
console.log(myMap(example));   