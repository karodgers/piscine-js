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


const opThrottle = (func, wait = 0, options = { leading: false, trailing: true }) => {
    
    let lastArgs, lastContext;
    let leadingCalled = false;
  
    const throttled = throttle(function() {
      func.apply(lastContext, lastArgs);
    }, wait);
  
    return function(...args) {
      lastArgs = args;
      lastContext = this;
  
      if (options.leading && !leadingCalled) {
        func.apply(this, args);
        leadingCalled = true;
        
      } else if (options.trailing) {
        throttled();
      }
  
      if (!options.leading) {
        leadingCalled = false;  
      }
    };
};
  






  

  
  
  
  