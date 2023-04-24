//implementation / Array.forEach()

Array.prototype.myForEach = function (action = () => {}) {
  for (let i = 0; i < this.length; i++) {
    action(this[i], i, this);
  }
};

const arr = [7, 8, 9, "yes", true, undefined]; // empty slots isn't working
const foo = (item) => console.log(item);

const checkMyForEach = arr.myForEach(foo);
console.log(checkMyForEach);

// check implementation

const check = arr.forEach(foo);
console.log(check);
