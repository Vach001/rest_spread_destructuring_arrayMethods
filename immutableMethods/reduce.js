Array.prototype.myReduce = function (action = () => {}, initialValue) {
  if (!this.length && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let accumulator = initialValue;
  let index = 0;
  if (initialValue === undefined) {
    accumulator = this[0];
    index = 1;
  }
  while (index < this.length) {
    accumulator = action(accumulator, this[index], index, this);
    index++;
  }
  return accumulator;
};

const array = [10, 20, 30, 40, 50];
const foo = (acc, curent) => acc + curent;
const checkMyReduce = array.myReduce(foo);

console.log(checkMyReduce);

// chech implementation

const checkReduce = array.reduce(foo);
console.log(checkReduce);
