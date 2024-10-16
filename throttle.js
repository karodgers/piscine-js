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
    let timeout;
    let lastCall = 0;
    const { leading = true, trailing = true } = options;
  
    return function throttled(...args) {
      const now = Date.now();
  
      if (leading && !timeout) {
        lastCall = now; 
        const result = func.apply(this, args);
        timeout = setTimeout(() => {
          timeout = null;
          if (trailing) {
            lastCall = Date.now(); 
            func.apply(this, args);
          }
        }, wait);
        return result; 
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          timeout = null;
          if (trailing) {
            lastCall = Date.now(); 
            func.apply(this, args);
          }
        }, wait - (now - lastCall));
      }
    };
  };
  

  
  
  
  