const findExpression = (target) => {

    const add4 = '+4';
    const mul2 = '*2';
    
    let current = 1;
    let expression = "1";

    while (current < target) {

        if (current * 2 <= target) {
            current = current * 2;
            expression = expression + ' ' + mul2;

        } else {

            current = current + 4;
            expression = expression + ' ' + add4;
        }
    }

    if (current === target) {
        return expression;

    } else {
        return undefined;
    }
};
