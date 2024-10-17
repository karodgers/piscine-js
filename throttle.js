
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
        if (!waiting) {
            waiting = true;
            if (option.leading) {
                lastResult = func.apply(this, args);
            } else {
                lastArgs = args;
            }
            setTimeout(() => {
                if (option.trailing && lastArgs) {
                    lastResult = func.apply(this, lastArgs);
                    lastArgs = null;
                }
                waiting = false;
            }, wait);
        } else {
            lastArgs = args;
        }

        return option.leading || option.trailing ? lastResult : undefined;
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









  

  
  
  
  