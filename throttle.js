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

function opThrottle(func, wait, options = {}) {

    let timeout = null;
    let lastCallTime = 0;
    let lastInvokeTime = 0;
    let lastArgs = null;
    let lastThis = null;
    let result;
    
    const { leading = true, trailing = true } = options;
  
    function invokeFunc(time) {
      lastInvokeTime = time;
      result = func.apply(lastThis, lastArgs);
      lastArgs = lastThis = null;
      return result;
    }
  
    function shouldInvoke(time) {
      const timeSinceLastCall = time - lastCallTime;
      const timeSinceLastInvoke = time - lastInvokeTime;
      return (lastCallTime === 0 && !leading) ||
             (timeSinceLastCall >= wait) ||
             (timeSinceLastCall < 0) ||
             (timeSinceLastInvoke >= wait);
    }
  
    function trailingEdge(time) {
      timeout = null;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = null;
      return result;
    }
  
    function cancel() {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timeout = null;
    }
  
    function flush() {
      return timeout === null ? result : trailingEdge(Date.now());
    }
  
    function throttled(...args) {
      const time = Date.now();
      const isInvoking = shouldInvoke(time);
  
      lastArgs = args;
      lastThis = this;
      lastCallTime = time;
  
      if (isInvoking) {
        if (timeout === null) {
          return leading ? invokeFunc(lastCallTime) : (lastArgs = lastThis = null, result);
        }
        if (trailing) {
          clearTimeout(timeout);
          timeout = setTimeout(() => trailingEdge(Date.now()), wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timeout === null && trailing) {
        timeout = setTimeout(() => trailingEdge(Date.now()), wait);
      }
      return result;
    }
  
    throttled.cancel = cancel;
    throttled.flush = flush;
    return throttled;
}


  

  
  
  
  