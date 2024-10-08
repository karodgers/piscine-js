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
    
    const result = arrNums.reduce((result, currentNumber, index) => {

      if (index === 0 && initialValue === undefined) {

        return currentNumber;

      } else if (currentNumber % 2 === 0) {

        return result * currentNumber;

      } else {

        return result + currentNumber;

      }
    }, initialValue);

    return result;
  };

const funcExcec = (arrFuncs, initialVal) =>{

    result = arrFuncs.reduce((acc, func) => {

        return func(acc);

    }, initialVal);

    return result;
}