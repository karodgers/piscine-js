const adder = (arrNums) =>{

    const sumOfNums = arrNums.reduce(function(sum, currentNumber){

        return sum + currentNumber

    }, 0);

    return sumOfNums;
}

const sumOrMul = (arrNums) => {

    if (arrNums.length === 0){
        
        return 0;
    }
    const result = arrNums.reduce((result, currentNumber) => {

        if (currentNumber % 2 === 0) {

            return result * currentNumber;

        } else {

            return result + currentNumber;
        }
    }, 0);

  return result;
};

const funcExcec = (arrFuncs, initialVal) =>{

    result = arrFuncs.reduce((acc, func) => {

        return func(acc);

    }, initialVal);

    return result;
}