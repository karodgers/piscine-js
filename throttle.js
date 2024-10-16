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
    let lastExec = 0;
    let lastArgs = null;
    const { leading = true, trailing = true } = options;
  
    return function (...args) {
        
      const context = this;
      const now = Date.now();
  
      if (!lastExec && !leading) {
        lastExec = now;
      }
  
      const remaining = wait - (now - lastExec);
  
      if (remaining <= 0 || remaining > wait) {

        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        func.apply(context, args);
        lastExec = now;
        lastArgs = null;

      } else if (!timeout && trailing) {

        lastArgs = args;
        timeout = setTimeout(() => {
          func.apply(context, lastArgs);
          lastExec = Date.now();
          lastArgs = null;
          timeout = null;
        }, remaining);
      }
    };
}
  
  
  