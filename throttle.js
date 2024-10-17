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


const opThrottle = (func, wait = 0, options = {leading: false, trailing: true}) => {
   
    let lastArgs, lastContext, timer, lastCallTime;
    let result;
  
    const invoke = () => {
      result = func.apply(lastContext, lastArgs);
      lastArgs = lastContext = null;
    };
  
    const shouldInvoke = (time) => {
      const timeSinceLastCall = time - lastCallTime;
      return !lastCallTime || timeSinceLastCall >= wait;
    };
  
    return function(...args) {
        
      const time = Date.now();
      lastArgs = args;
      lastContext = this;
  
      if (shouldInvoke(time)) {

        if (!timer && options.leading) {

          lastCallTime = time;
          invoke();

        } else {

          if (timer) {
            clearTimeout(timer);
          }

          timer = setTimeout(() => {
            lastCallTime = Date.now();
            timer = null;
            if (options.trailing) {
              invoke();
            }
          }, wait);
        }
      }
  
      return result;
    };
};






  

  
  
  
  