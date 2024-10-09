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

const partition = (array, predicate) =>{

    const truthyPart = filter(array, predicate);   

    const falsyPart = reject(array, predicate); 
     
    return [truthyPart, falsyPart];    
}



