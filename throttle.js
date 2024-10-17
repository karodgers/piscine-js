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

function opThrottle(func, wait, option = { leading: true, trailing: true }) {
    
    let waiting = false;
    let lastArgs = null;

    return function wrapper(...args) {
       
        if (!waiting) {
            waiting = true;

            const startWaitingPeriod = () => setTimeout(() => {
               
                if (option.trailing && lastArgs) {
                    func.apply(this, lastArgs);
                    lastArgs = null;
                    startWaitingPeriod();
                } else {
                    waiting = false;
                }
            }, wait);

            if (option.leading) {

                func.apply(this, args);
            } else {
                lastArgs = args; 
            }

            startWaitingPeriod();
            
        } else {
            lastArgs = args;
        }
    };
}


// const opThrottle = (func, wait = 0, options = { leading: false, trailing: true }) => {
//     let lastArgs, lastContext;
//     let timer = null;
//     let result;
//     let invoked = false;

//     const invoke = () => {
//         result = func.apply(lastContext, lastArgs);
//         lastArgs = lastContext = null;
//     };

//     return function (...args) {
//         lastArgs = args;
//         lastContext = this;

//         const isLeading = options.leading && !invoked;

//         if (isLeading) {
//             invoke();
//             invoked = true;
//             return result; 
//         }

//         if (!timer) {
//             timer = setTimeout(() => {
//                 timer = null;
//                 if (options.trailing && invoked) {
//                     invoke();
//                 }
//                 invoked = false;
//             }, wait);
//         }

//         if (options.trailing && !isLeading) {
//             invoked = true;
//         }

//         return result;  
//     };
// }









  

  
  
  
  