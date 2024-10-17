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

    let timeout = null;
    let lastCall = 0;
    let lastArgs = null;
    const { leading = true, trailing = true } = options;
  
    return function (...args) {
      const now = Date.now();
  
      if (!lastCall && !leading) {
        lastCall = now;
      }
  
      const remaining = wait - (now - lastCall);
  
      if (remaining <= 0 || remaining > wait) {

        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastCall = now;
        func.apply(this, args);

      } else if (!timeout && trailing) {
        
        lastArgs = args;
        timeout = setTimeout(() => {
          lastCall = leading ? Date.now() : 0;
          timeout = null;
          func.apply(this, lastArgs);
        }, remaining);
      }
    };
}


  

  
  
  
  