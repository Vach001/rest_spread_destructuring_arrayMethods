//implementation find function method

Array.prototype.myFind = function (action = () => {}) {
  for (let i = 0; i < this.length; i++) {
    const result = action(this[i], i, this);

    if (result === true) {
      return this[i];
    }
    if (i === this.length - 1) {
      return "undefined";
    }
  }
};
const array = [1, 2, 3, 4, 6, 5, 7];
const foo = (item) => item === 8;

const checkMyFind = array.myFind(foo);
console.log(checkMyFind);

// checking find implementation

const check = array.find(foo);
console.log(check);
