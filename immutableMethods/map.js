//implementation map function method

Array.prototype.myMap = function (action = () => {}) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(action(this[i], i, this));
  }
  return newArray;
};

const array = [1, 11, 2, 22, 3, 33, 333];
const foo = (item) => item * 3;
const checkMyMap = array.myMap(foo);

console.log(checkMyMap);

//check implementation

const checkMap = array.map(foo);

console.log(checkMap);
