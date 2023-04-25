//implementation some function method

Array.prototype.mySome = function (action = () => {}) {
  for (let i = 0; i < this.length; i++) {

    if (action(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const array = [1, 2, 3, 4, 5];
const foo = (item) => item > 4
const checkMySome = array.mySome(foo);

console.log(checkMySome);

//check implementation

const checkSome = array.some(foo);

console.log(checkSome);