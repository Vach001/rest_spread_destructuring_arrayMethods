//implementation filter function method

Array.prototype.myFilter = function (action = () => {}) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {

    if (action(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const myArray = [9, 8, 7, 6, 5, 4, 3];
const foo = (item) => item >= 5;

const checkMyArray = myArray.myFilter(foo);
console.log(checkMyArray);

// checking implementation

const check = myArray.filter(foo);
console.log(check);
