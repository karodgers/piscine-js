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
    
    let invoked = false;
    let timer;
    let lastResult;

    return function(...args) {
        if (options.leading && !invoked) {
            lastResult = func.apply(this, args);  
            invoked = true;
        }

        if (!timer) {
            
            timer = setTimeout(() => {
                if (options.trailing) {
                    lastResult = func.apply(this, args); 
                }
                invoked = false;  
                timer = null;  
            }, wait);

        } else if (options.trailing) {
            
            clearTimeout(timer); 
            timer = setTimeout(() => {
                if (options.trailing) {
                    lastResult = func.apply(this, args);  
                }
                invoked = false;
                timer = null;
            }, wait);
        }

        return lastResult; 
    };
};


  






  

  
  
  
  