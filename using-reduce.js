const adder = (arrNums, additionalValue = 0) => {

    const sumOfNums = arrNums.reduce((sum, currentNumber) => {

        return sum + currentNumber;

    }, 0); 

    return sumOfNums + additionalValue;
}


const sumOrMul = (arrNums, initialValue) => {
    if (arrNums.length === 0) {

      return initialValue !== undefined ? initialValue : 0;
      
    }
    
    let startIndex;

    if (initialValue !== undefined) {
        startIndex = 0;
    } else {
        startIndex = 1;
    }
    
    let startValue;
    
    if (initialValue !== undefined) {

        startValue = initialValue;

    } else {

        startValue = arrNums[0];
    }
    
    
    const result = arrNums.slice(startIndex).reduce((result, currentNumber) => {
     
      if (currentNumber % 2 === 0) {

        return result * currentNumber;

      } else {

        return result + currentNumber;

      }
    }, startValue);

    return result;
};

const funcExcec = (arrFuncs, initialVal) =>{

    result = arrFuncs.reduce((acc, func) => {

        return func(acc);

    }, initialVal);

    return result;
}