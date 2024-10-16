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

function opThrottle(func, wait, options) {

    let lastTime = 0;
    let timeout;
  
    return function() {

      const now = Date.now();
  
      if (options.leading && now - lastTime >= wait) {
        func();
        lastTime = now; 
      }
  
      clearTimeout(timeout);
  
      timeout = setTimeout(() => {

        if (options.trailing) {
          func(); 
          lastTime = Date.now(); 
        }
      }, wait); 
    };
}
  
  
  