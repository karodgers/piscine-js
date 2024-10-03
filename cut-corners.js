const round = (nums) => {
    if (nums >= 0) {
        return floor(nums + 0.5);
    } else {
        return ceil(nums - 0.5);
    }
};

const ceil = (nums) => {
    let intPart = floor(nums);
    if (nums > intPart) {
        return intPart + 1; 
    }
    return intPart; 
};

const floor = (nums) => {
    if (nums >= 0) {
        return trunc(nums); 
    } else {
        let truncated = trunc(nums);
        if (nums < truncated) {
            return truncated - 1;
        }
        return truncated; 
    }
};

const trunc = (num) => {
    let integerPart = 0;
    if (num >= 0) {
        while (integerPart < num) {
            integerPart++;
        }
        return integerPart === num ? integerPart : integerPart - 1;
    } else {
        integerPart = 0;
        while (integerPart > num) {
            integerPart--;
        }
        return integerPart === num ? integerPart : integerPart + 1;
    }
};






