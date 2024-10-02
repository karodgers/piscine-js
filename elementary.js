const multiply = (a,b)=>{
    if (a === 0 || b===0){
        return 0;
    }
    if (a<0||b<0){
        return -multiply(a, b);
    }
    return a + multiply(a, b-1);

};

const divide = (a,b) => {
    let quotient = 0

    while (a>=b){
        a = a - b;
        quotient++;
    }
    return quotient;

};

const modulo =(a,b) => {
    while (a>=b){
        a = a - b;
    }
    return a;
};

