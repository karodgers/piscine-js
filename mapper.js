const map = (arr, func) =>{

    var result = []; 

    for (var i = 0; i < arr.length; i++) { 

        result[i] = func(arr[i], i, arr); 
    }

    return result;
};

const flatMap = (arr, func = (num) => num) => { 

    var result = [];

    for (var i = 0; i < arr.length; i++) {

        var mapped = func(arr[i], i, arr);


        if (typeof mapped === 'string') {

            result.push(mapped);

        } else {

            result.push((parseInt(mapped) + 1).toString()); 
        }
    }
    return result;
};



