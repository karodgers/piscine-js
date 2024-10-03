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
    let result = num;
    if (num >= 0) {
        while (result > 1) {
            result -= 1;
        }
    } else {
        while (result < -1) {
            result += 1;
        }
    }
    return num - result;
};


// const trunc = (num) => {
//     if (num >= 1) {
//         return 1 + trunc(num - 1);
//     } else if (num < 0 && num > -1) {
//         return 0;
//     } else if (num < 0) {
//         return -1 + trunc(num + 1);
//     }
//     return 0; 
// };


