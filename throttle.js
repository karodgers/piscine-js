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

const opThrottle = (func, wait, options = {}) => {

    let lastTime = 0;
    let timeout;
    let lastArgs;
    let result;
  
    const throttled = function (...args) {

      const now = Date.now();
      const remaining = wait - (now - lastTime);
  
      lastArgs = args;
  
      return new Promise((resolve) => {

        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          lastTime = now;
          result = func.apply(this, args);
          resolve(result);

        } else if (!timeout && options.trailing !== false) {

          timeout = setTimeout(() => {
            lastTime = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(this, lastArgs);
            resolve(result);
          }, remaining);

        } else {
          resolve(result);
        }
      });
    };
  
    return throttled;
}
  
  
  