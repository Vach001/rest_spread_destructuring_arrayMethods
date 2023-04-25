//implementation / slice() function

Array.prototype.mySlice = function (start, end) {
  const newArray = [];
  let stop = this.length - 1;

  if (start === undefined) {
    return newArray;
  }
  if (start < 0) {
    start = start + this.length;
  }
  if (start < 0 && start < this.length - 1) {
    start = start + this.length;
  }
  if (end !== undefined && end > 0) {
    stop = end - 1;
  }
  if (end < 0) {
    stop = end + this.length - 1;
  }

  for (let i = start; i <= stop; i++) {
    newArray.push(this[i]);
  }

  return newArray;
};

const array = [8, 3, 4, 5, 4];
const checkMySlice = array.mySlice(-10, -1);

console.log(checkMySlice);

// check implementation

const checkSlice = array.slice(-10, -1);
console.log(checkSlice);
