function filter(arr, func) {

    const result = []; 
    
    for (let i = 0; i < arr.length; i++) { 

        if (func(arr[i], i, arr)) { 

            result.push(arr[i]); 
        }
    }
    
    return result; 
};


const reject = (arr, predicate) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {

      const item = arr[i];

      if (!predicate(item, i, arr)) {

        result.push(item);

      }
    }
    return result;
}

const partition = (array, predicate) => {
    
    const truthyGroup = [];

    const falsyGroup = [];
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
  
      if (predicate(item)) {

        truthyGroup.push(item);

      } else {

        falsyGroup.push(item);

      }
    }
  
    return [truthyGroup, falsyGroup];
};


