//implementation findIndex function method

Array.prototype.myFindIndex = function (action = () => {}) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const result = action(element);

    if (result) {
      return i;
    }
  }
  return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const foo = (item) => item === 5;

const checkMyFindIndex = array.myFindIndex(foo);
console.log(checkMyFindIndex);

//checking implementation

const check = array.findIndex(foo);
console.log(check);
