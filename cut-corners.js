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
    let result = 0;
    let isNegative = num < 0;
    num = isNegative ? -num : num;

    while (num >= 1) {
        result += 1;
        num -= 1;
    }
    if (num > 0 && num < 1) {
        return isNegative ? -result : result;
    }

    return isNegative ? -result : result;
};

const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))
