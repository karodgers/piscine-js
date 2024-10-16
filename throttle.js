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

const opThrottlle = (callback, delay, config = { startImmediately: true, endAfterDelay: true }) => {
   
    let isActive = false;
    let timeoutId;

    return (...args) => {
        const executeCallback = () => {
            isActive = false;
            if (config.endAfterDelay) {
                callback(...args);
            }
        };

        if (!isActive) {
            if (config.startImmediately) {
                callback(...args);
            }
            isActive = true;

            timeoutId = setTimeout(executeCallback, delay);
        } else if (config.endAfterDelay) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(executeCallback, delay);
        }
    };
}

  

  
  
  
  