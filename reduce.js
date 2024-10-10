const fold =(arr, func, accumulator) => {
    for (let i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
};

const foldRight = (arr, func, accumulator) =>{
    for (let i = arr.length - 1; i >= 0; i--) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
};

const reduce = (arr, func) =>{
    if (arr.length === 0) {
        return 'Error'
    }

    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
};

const reduceRight=(arr, func)=> {
    if (arr.length === 0) {
        return 
    }

    let accumulator = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
};
