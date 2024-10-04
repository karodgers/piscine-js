const triangle = (str, num) =>{
    if (typeof str !== 'string'){
        return '';
    }
    if (typeof num !== 'number'){
        return '';
    }
    let result = '';
    for(let i = 0; i<=num; i++){
        result = result + str + '\n';
    }
    return result;
}