//implementation every function method

function myEvery(myArray, action = () => {}) {
    let isEvery = true

    for(let i = 0; i <myArray.length; i++) {
        let currentItem = myArray[i] 
        
        if(!action(currentItem)) {
            return isEvery = false
        } 
    }
    return isEvery;
};