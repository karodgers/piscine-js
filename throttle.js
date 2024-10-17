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
function opThrottle(func, wait, options = { leading: true, trailing: true }) {
   
    let lastTime = 0;
    let timeout;
    let lastArgs;
    let leadingInvoked = false;

    return function(...args) {
        const now = Date.now();
        const isFirstCall = lastTime === 0;
        const remainingTime = isFirstCall ? 0 : wait - (now - lastTime);

        lastArgs = args;

        if (remainingTime <= 0 || isFirstCall) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }

            if (options.leading && !leadingInvoked) {
                leadingInvoked = true;
                lastTime = now;
                return func(...args);
            }

            lastTime = now;
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
