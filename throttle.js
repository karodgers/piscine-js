const throttle = (func, wait) => {

    let lastTime = 0;
  
    return function() {

      const now = Date.now();
      
      if (now - lastTime >= wait) {
        lastTime = now;
        func(); 
      }
    };
}

const opThrottle = (func, wait, options) =>{

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
        }
      }, wait);
    };
}
  
  