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
  
    return function (...args) {

      const now = Date.now();
      const remaining = wait - (now - lastTime);
  
      lastArgs = args;
  
      if (remaining <= 0 || remaining > wait) {
        
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastTime = now;
        func.apply(this, args);

      } else if (!timeout && options.trailing !== false) {

        timeout = setTimeout(() => {
          lastTime = options.leading === false ? 0 : Date.now();
          timeout = null;
          func.apply(this, lastArgs);
        }, remaining);
      }
    };
};
  
  
  