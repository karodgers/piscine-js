
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
const opThrottle = (func, wait, option = { leading: true, trailing: true }) =>{
    let waiting = false;
    let lastArgs = null;
    let lastResult = undefined;

    return function wrapper(...args) {
        const invokeFunction = () => {
            lastResult = func.apply(this, args);
            lastArgs = null;
        };

        if (!waiting) {
            waiting = true;
            if (option.leading) {
                invokeFunction();
            } else {
                lastArgs = args;
            }
            const startWaitingPeriod = () => setTimeout(() => {
                if (option.trailing && lastArgs) {
                    invokeFunction();
                }
                waiting = false;
            }, wait);
            startWaitingPeriod();
        } else {
            lastArgs = args;
        }

        return lastResult;
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









  

  
  
  
  