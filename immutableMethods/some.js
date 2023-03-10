//implementation some function method

function mySome(myArray, action = () => {}) {
    let isSome = false;

    for(let i = 0; i < myArray.length; i++) {
        let currentItem = array[i];

        if(action(currentItem)) {
            return isSome = true;
        } 
    }
    return isSome;
};