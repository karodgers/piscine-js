const round = (num) => {
    if (num >= 0) {
        return floor(num + 0.5);
    } else {
        return ceil(num - 0.5);
    }

};

const ceil = (num) => {
    let intPart = floor(num);
    if (num > intPart) {
        return intPart + 1; 
    }
    return intPart; 

};

const floor = (num) => {
    if (num >= 0) {
        return trunc(num); 
    } else {
        let truncated = trunc(num);
        if (num < truncated) {
            return truncated - 1;
        }
        return truncated; 
    }
};


const trunc = (num) => {
    if (num === 0){
        return 0; 
    } 
    if (num > 0 && num < 1) {
        return 0; 
    }    
    if (num < 0 && num > -1) {
        return -0; 
    }
    let result = 0;
    let isNegative = num < 0;
    
    num = isNegative ? -num : num;

    num = Math.abs(num);

    while (num >= 1) {
        result += 1;
        num -= 1;
        if (num < 1e-10){
            break;
        } 
    }


    return isNegative ? -result : result;
};
