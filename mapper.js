const map = (arr, func) =>{

    var result = []; 

    for (var i = 0; i < arr.length; i++) { 

        result[i] = func(arr[i], i, arr); 
    }

    return result;
};

const flatMap = (arr, func) => {

    var result = [];

    for (var i = 0; i < arr.length; i++) {

        var mapped = func(arr[i], i, arr);

        if (typeof mapped === 'string') {

            result.push(mapped); 

        } else {

            for (var j = 0; j < mapped.length; j++) {

                result.push(mapped[j]); 
            }
        }
    }
    return result;
};

const add1 = (num) => {
    return (parseInt(num) + 1).toString(); 
};

