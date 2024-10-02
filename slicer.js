const slice = (arrOrString, startingIndex, optionalEndingIndex) => {
    let result = [];
    let end = optionalEndingIndex || arrOrString.length;
    let resultIndex = 0; 

    for (let i = startingIndex; i < end; i++) {
        result[resultIndex] = arrOrString[i]; 
        resultIndex++; 
    }

    if (typeof arrOrString === 'string') {
        return result.join('');
    }

    return result;
};
