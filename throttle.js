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
    let timer = null;
    let result;
    let invoked = false;

    const invoke = () => {
        result = func.apply(lastContext, lastArgs);
        lastArgs = lastContext = null;
    };

    return function (...args) {
        lastArgs = args;
        lastContext = this;

        const isLeading = options.leading && !invoked;

        if (isLeading) {
            invoke();
            invoked = true;
            return result; 
        }

        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                if (options.trailing && invoked) {
                    invoke();
                }
                invoked = false;
            }, wait);
        }

        if (options.trailing && !isLeading) {
            invoked = true;
        }

        return result;  
    };
}









  

  
  
  
  