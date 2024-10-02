const multiply = (a, b) => {
    if (b === 0) {
        return 0;
    }
    if (b < 0) {
        return -multiply(a, -b);
    }
    return a + multiply(a, b - 1);
};
const divide = (a,b) => {
    if (b === 0) {
        return 0;
    }
    let quotient = 0

    while (a>=b){
        a = a - b;
        quotient++;
    }
    return quotient;

};
const modulo =(a,b) => {
    if (b === 0) {
        return 0;
    }
    while (a>=b){
        a = a - b;
    }
    return a;
};


