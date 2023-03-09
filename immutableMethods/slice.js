//implementation / slice() function

function sliceMethod(array, start, end) {
    let newArray = [];

    if (typeof end === 'undefined' || end > array.length) {

        end = array.length;
    }
    for (let i = start; i < end; i++) {

        newArray.push(array[i]);
    }
    return newArray;
  };
  const arr = [8,3,4,5,4];
  
  console.log(sliceMethod(arr, 1, 3)); 

  console.log(arr.slice(1, 3));    //implementation is true