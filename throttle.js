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

        func.apply(this, args);
        
        if (wait !== Infinity) {
          timeout = setTimeout(() => {
            timeout = null;
            if (trailing) {
              func.apply(this, args);
            }
          }, wait);
        }
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          timeout = null;
          if (trailing) {
            func.apply(this, args);
          }
        }, wait - (now - lastCall));
      }
    };
}

  
  
  
  