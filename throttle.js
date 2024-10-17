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
    let leadingExecuted = false;

    const invoke = () => {
        result = func.apply(lastContext, lastArgs);
        lastArgs = lastContext = null;
    };

    return function (...args) {
        lastArgs = args;
        lastContext = this;

        if (options.leading && !invoked) {
            invoke();
            invoked = true;
            leadingExecuted = true;
            if (!options.trailing) {
                return result;  
            }
        }

        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                if (options.trailing && (invoked || leadingExecuted)) {
                    invoke(); 
                }
                invoked = false; 
                leadingExecuted = false; 
            }, wait);
        }

        if (options.trailing && !options.leading) {
            invoked = true;  
        }

        return result; 
    };
};










  

  
  
  
  