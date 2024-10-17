const throttle = (func, wait) => {
    let lastTime = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            return func(...args);
        }
    };
}
const opThrottle = (func, wait, options = { leading: true, trailing: true }) =>{
    let lastTime = 0;
    let timeout;
    let lastArgs;
    let lastCallTime;

    return function(...args) {
        const now = Date.now();
        lastArgs = args;
        if (!lastCallTime && options.leading === false) {
            lastCallTime = now;
        }

        const remainingTime = wait - (now - lastTime);

        if (remainingTime <= 0 || remainingTime > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastTime = now;
            lastCallTime = now;
            return func(...args);
        } else if (options.trailing && !timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                if (options.trailing && lastArgs) {
                    func(...lastArgs);
                }
            }, remainingTime);
        }
    };
}
