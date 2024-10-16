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


const opThrottle = (func, wait = 0, options = { leading: false, trailing: true }) => {
   
    if (options.leading && options.trailing){
        
        return throttle(func, wait);
    } 

    let lastExecutionTime = 0;
    let pendingArgs = null;
    let timer = null;

    const execute = (args) => {
        func(...args);
        lastExecutionTime = Date.now();
        pendingArgs = null;
    };

    const scheduleExecution = () => {
        if (pendingArgs) {
            timer = null;
            execute(pendingArgs);
        }
    };

    return (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastExecutionTime;

        if (options.leading && timeSinceLastCall >= wait) {
            execute(args);
        } else {
            pendingArgs = args;
            if (options.trailing && !timer) {
                timer = setTimeout(scheduleExecution, wait - timeSinceLastCall);
            }
        }
    };
}

  
  
  
  