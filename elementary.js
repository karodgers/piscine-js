const multiply = (a, b) => {
    if (b === 0 || a===0) {
        return 0;
    }
    if (b < 0) {
        return -multiply(a, -b);
    }
    return a + multiply(a, b - 1);
};
const divide = (a,b) => {
    if (b === 0) {
        return undefined;
    }
    if (a === 0) {
        return 0;
    }
    if (a < 0 && b < 0) {
        return divide(-a, -b);
    }
    if (a < 0 || b < 0) {
        return -divide(Math.abs(a), Math.abs(b));
    }
    let quotient = 0;
    while (a >= b) {
        a = a - b;
        quotient++;
    }
    return quotient;

};
const modulo = (a, b) => {
    if (b === 0) {
      return undefined;
    }
    if (a === 0) {
      return 0;
    }
    const isNegative = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (a >= b) {
      a -= b;
    }
    
    if (isNegative) {
        result = -a; 
    } else {
        result = a; 
    }
};


