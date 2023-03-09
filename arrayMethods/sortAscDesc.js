//Your function must use sort method.
//- Create a function that takes an array of numbers arr, a string str 
//and return an array of numbers as per the following rules.
//- "Asc" returns a sorted array in ascending order.
//- "Desc" returns a sorted array in descending order.


function sortBy(arrayMix, sortMethod) {
    let arrayCopy = arrayMix;
    switch (sortMethod) {
        case 'Asc' :
            return arrayCopy.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
        case 'Desc' :
            return arrayCopy.sort((firstNumber, secondNumber) => secondNumber - firstNumber);
        default :
            return arrayMix;
    }
};

console.log(sortBy([4, 3, 2, 1], "Asc" ));     // [1, 2, 3, 4]
console.log(sortBy([7, 8, 11, 66]));           // [7, 8, 11, 66]
console.log(sortBy([7, 8, 11, 66], "Desc"));   // [66, 11, 8, 7]