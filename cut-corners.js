function findExponent(val) {
    if (val >= -1 && val < 1){
        return 0;
    } 
    let exp = 0;
    let absVal = val < 0 ? -val : val;
    while (absVal >= 2) {
        absVal /= 2;
        exp++;
    }
    return exp;
}

function approximateInteger(val, roundingFunc) {
    if (val === 0 || (val > -1 && val < 1)) return 0;
    
    let sign = val < 0 ? -1 : 1;
    let absVal = val < 0 ? -val : val;
    
    let base = 2 ** findExponent(absVal);
    let result = base;
    
    while (result * sign <= val) {
        result += 1;
    }
    
    return roundingFunc(result, sign, val);
}

function truncateRounding(result, sign, val) {
    return (result - 1) * sign;
}

function floorRounding(result, sign, val) {
    return sign > 0 ? (result - 1) * sign : result * sign;
}

function ceilRounding(result, sign, val) {
    return sign > 0 ? result * sign : (result - 1) * sign;
}

function roundRounding(result, sign, val) {
    let diff = result * sign - val;
    if (sign > 0) {
        return diff > 0.5 ? (result - 1) * sign : result * sign;
    } else {
        return diff < -0.5 ? result * sign : (result - 1) * sign;
    }
}

function trunc(val) {
    return approximateInteger(val, truncateRounding);
}

function floor(val) {
    return approximateInteger(val, floorRounding);
}

function ceil(val) {
    return approximateInteger(val, ceilRounding);
}

function round(val) {
    return approximateInteger(val, roundRounding);
}