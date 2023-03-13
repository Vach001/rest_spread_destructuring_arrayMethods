function myReduce(sum, number, array) {
    for(let i = 0; i < array.length; i++) {
        number = array[i];
        sum += number;
    }
    return sum;
}

const arr = [10, 20, 30, 40];
const acc = 0;
const curr = 0;

console.log(myReduce(acc, curr, arr));