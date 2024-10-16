const throttle = (func, wait) => {
    
    let lastTime = 0;
    let timeout;
  
    return function(...args) {

      const now = Date.now();

      if (!lastTime || now - lastTime >= wait) {

        lastTime = now;

        func(...args);

      } else {

        clearTimeout(timeout); 

        timeout = setTimeout(() => {

          lastTime = Date.now();

          func(...args); 

        }, wait - (now - lastTime));
      }
    };
}


const opThrottle = (func, wait = 0, options) => {
    
    const { leading = false, trailing = true } = options || {};

    if (leading && trailing) return throttle(func, wait);

    let lastExecutionTime = 0;
    let timer = null;
    let pendingArgs = null;

    const execute = (args) => {
        func(...args);
        lastExecutionTime = Date.now();
        pendingArgs = null;
    };

    const scheduleExecution = () => {
        if (pendingArgs) {
            execute(pendingArgs);
            timer = null; 
        }
    };

    return (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastExecutionTime;

        if (leading && timeSinceLastCall >= wait) {
            execute(args);
        }

        if (trailing) {
            if (!timer) {
                timer = setTimeout(scheduleExecution, wait - timeSinceLastCall);
            }
            pendingArgs = args; 
        }
    };
};


  
  
  
  