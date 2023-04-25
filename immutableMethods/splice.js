//implementation splice function method

Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let newArray = [];

  // if we only provide start mySplice(start)
  if (!deleteCount) {
    for (let i = 0; i < this.length; i++) {
      if (i < start) {
        newArray.push(this[i]);
      }
    }
    this.length = 0;
    this.push.apply(this, newArray);
    return;
  }

  // if we only provide start and deleteCount mySplice(start, deleteCount)
  if (!items) {
    for (let i = 0; i < this.length; i++) {
      if (i < start || i >= start + deleteCount) {
        newArray.push(this[i]);
      }
    }

    this.length = 0;
    this.push.apply(this, newArray);
    return;
  }

  // if we provide all arguments to the function
  for (let i = 0; i < this.length; i++) {
    if (i === start + deleteCount) {
      newArray = [...newArray, ...items];
    }
    if (i < start || i >= start + deleteCount) {
      newArray.push(this[i]);
    }
  }

  this.length = 0;
  this.push.apply(this, newArray);
  return;
};

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
// check implementation

console.log(planets);

planets.mySplice(3, 3, "Pluto", "Other");

console.log(planets);

// check other example

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

array.mySplice(1, 7, 0, 1);

console.log(array);
