//implementation every function method

Array.prototype.myEvery = function (action = () => {}) {
  for (let i = 0; i < this.length; i++) {
    if (!action(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const arr = [5, -1, 9, 11];
const foo = (item) => item % 2 !== 0;

const odd = arr.myEvery(foo);
console.log(odd);

// checking implementation
const check = arr.every(foo);
console.log(check);
