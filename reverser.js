const reverse = (arrOrString) =>{
    if (typeof arrOrString === 'string'){
        let result = '';
        for (let i= arrOrString.length -1; i>=0; i--){
            result = result + arrOrString[i];
        }
        return result;
    }
    

    if (Array.isArray(arrOrString)){
        let result = [];
        for (let i = arrOrString.length -1; i>= 0; i--){
            result.push(arrOrString[i]);
        }
        return result;
    }
    return null
}   