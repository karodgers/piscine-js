const longWords = (arr) =>{

    const words = arr.every((element) => {
        return typeof element === 'string' && element.length >= 5;
    });

    return words; 
};

const oneLongWord = (arr) =>{

    const result = arr.some((str) => {

        return str.length >= 10; 

    });

    return result;
}

const noLongWords = (arr) =>{

    const result = arr.every((word) => {

        return word.length < 7
    });

    return result;

};