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


const opThrottle = (taskToRun, waitTime = 0, options = {startImmediately: false, endAfterWait: true}) => {
    
    let hasRun = false;
    let timeoutId = null; 

    function runTaskLater(taskArguments) {
        hasRun = false;
        if (options.endAfterWait) {
            taskToRun.apply(null, taskArguments); 
        }
    }

    return function() {
        if (!hasRun) {
            let taskArguments = arguments; 

            if (options.startImmediately) {
                taskToRun.apply(null, taskArguments); 
            }

            hasRun = true; 
            clearTimeout(timeoutId); 
            timeoutId = setTimeout(function() {
                runTaskLater(taskArguments); 
            }, waitTime);
        }
    };
}



  

  
  
  
  