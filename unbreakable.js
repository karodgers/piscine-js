const split = (str, sep) => {
    if (typeof str !== 'string') {
        return;
    }

    const result = [];
           
    let currentSegment = ''; 

    const sepLength = sep.length; 
   
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + sepLength) === sep) {
            result.push(currentSegment); 
            currentSegment = '';  
            i += sepLength - 1; 
        } else {
            currentSegment += str[i]; 
        }
    }

    result.push(currentSegment);

    return result; 
}


const join = (arr, sep) => {

    if (!Array.isArray(arr)) {
       return;
    }

    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];

        if (i < arr.length - 1) {
            result += sep;
        }
    }

    return result; 

}