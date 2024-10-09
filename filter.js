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

const partition = (array, predicate)=> {
    
    return array.reduce(

        (result, element) => {

          if (predicate(element)) {

            result[0].push(element);

          } else {
            
            result[1].push(element);
          }
          return result;
        },
        [[], []]
    );
}


