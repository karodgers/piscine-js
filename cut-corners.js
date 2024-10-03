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
    if (num >= 0) {
        let intPart = 0;
        while (num >= 1) {
            intPart += 1;
            num -= 1;
        }
        return intPart;
    }
    else {
        let intPart = -1;
        while (num < 0) {
            intPart -= 1;
            num += 1;
        }
        return intPart;
    }
};




