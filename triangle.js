const triangle = (str, num) =>{
    if (typeof str !== 'string'){
        return '';
    }
    if (typeof num !== 'number'){
        return '';
    }
    let result = '';
    for (let i = 1; i <= num; i++) { 
        let line = '';
        for (let j = 0; j < i; j++) { 
            line = line + str;
        }
        result = result + line + '\n'; 
    }

    return result;
}