//implementation every function method

function myEvery(myArray = [], action = () => {}) {
    for(let i = 0; i <myArray.length; i++) {
        if(!action(myArray[i], i, myArray)) {
            return false;
        } 
    }
    return true;
};

const arr = [5, 3, 9, 11];
const foo = ((item) => item % 2 !==0);
const odd = myEvery(arr, foo);

console.log(odd);