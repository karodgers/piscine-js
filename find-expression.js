const findExpression = (target) => {

    const add4 = '+4';
    
    const mul2 = '*2';

    let queue = [{ current: 1, expression: "1" }];

    while (queue.length) {
        let { current, expression } = queue.shift();

        if (current === target) {
            return expression;
        }

        if (current * 2 <= target) {
            queue.push({ current: current * 2, expression: expression + ' ' + mul2 });
        }

        if (current + 4 <= target) {
            queue.push({ current: current + 4, expression: expression + ' ' + add4 });
        }
    }

    return undefined; 
};