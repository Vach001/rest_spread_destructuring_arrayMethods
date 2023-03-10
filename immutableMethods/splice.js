//implementation splice function method

function mySplice(array, start, delCount, items) {
    const splicedArray = [];
    let end = start + delCount;

    for (let i = array.length; i > start; i--) {

        splicedArray.unshift(array.pop(array[i]));
    }

    for (let i = 0; i < items.length; i++) {

        splicedArray[i] = items[i]
    }

    return array.concat(splicedArray);
};

    
const example = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const items = [15, 17];

console.log(mySplice(example, 3, 2, items));