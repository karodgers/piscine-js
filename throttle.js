const throttle = (mainFunction, delay) => {

    let timerFlag = null; 
  
    return (...args) => {
      if (timerFlag === null) { 
        mainFunction(...args);  
        timerFlag = setTimeout(() => { 
          timerFlag = null; 
        }, delay);
      }
    };
}


const opThrottle = (func, wait = 0, options = {leading: false, trailing: true}) =>{
    
    let lastArgs, lastContext;
    let timer = null;
    let result;

    const invoke = () => {
        result = func.apply(lastContext, lastArgs);
        lastArgs = lastContext = null;
    };

    return function(...args) {
        lastArgs = args;
        lastContext = this;

        const isLeading = options.leading && !timer;

        if (isLeading) {
            invoke();
        }

        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                if (options.trailing) {
                    invoke();
                }
            }, wait);
        }

        return result;
    };
}






  

  
  
  
  