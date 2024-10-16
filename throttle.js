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

const opThrottle = (callback, delay, options = { startImmediately: true, endAfterDelay: true }) => {
   
    let isActive = false;
    let timeoutId;
    let lastResult;

    return (...args) => {

        const invokeCallback = () => {
            isActive = false;
            if (options.endAfterDelay) {
                lastResult = callback(...args);
            }
        };

        if (!isActive) {
            if (options.startImmediately) {
                lastResult = callback(...args);
            }
            isActive = true;

            timeoutId = setTimeout(invokeCallback, delay);
        } else if (options.endAfterDelay) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(invokeCallback, delay);
        }

        return lastResult; 
    };
}


  

  
  
  
  