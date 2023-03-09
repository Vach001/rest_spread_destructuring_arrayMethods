//implementation / Array.forEach() 

function forEach(array) {
    for(let i = 0; i < array.length; i++) {

        console.log(arr[i]);
    }
};

const arr = [7,8,9,"yes", true, undefined, , "NO", ' '];   // empty slots isn't working
console.log(forEach(arr));