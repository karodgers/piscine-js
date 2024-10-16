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

const opThrottle = (func, wait, options) => {

    let lastTime = 0;   
    let timeout;        
    let leadingCalled = false; 

    return function(...args) {

      const now = Date.now();
  
      if (options.leading && !leadingCalled && now - lastTime >= wait) {
        func(...args);     
        lastTime = now;  
        leadingCalled = true; 
      }
  
      clearTimeout(timeout);
  
      timeout = setTimeout(() => {
        if (options.trailing) {
          func(...args);  
        }
        lastTime = Date.now(); 
        leadingCalled = false; 
      }, wait);
    };
}
  
  
  