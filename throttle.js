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


// const opThrottle = (func, wait = 0, options = {leading: false, trailing: true}) =>{
    
//     let lastArgs, lastContext;
//     let timer = null;
//     let result;

//     const invoke = () => {
//         result = func.apply(lastContext, lastArgs);
//         lastArgs = lastContext = null;
//     };

//     return function(...args) {
//         lastArgs = args;
//         lastContext = this;

//         const isLeading = options.leading && !timer;

//         if (isLeading) {
//             invoke();
//         }

//         if (!timer) {
//             timer = setTimeout(() => {
//                 timer = null;
//                 if (options.trailing) {
//                     invoke();
//                 }
//             }, wait);
//         }

//         return result;
//     };
// }

const opThrottle = (func, delay, { leading = false, trailing = true } = {}) => {
   
    let lastTime = 0;
    let timer = null;

    const executeFunc = (context, args) => {

        func.apply(context, args);
        lastTime = Date.now();
    };

    return function(...args) {

        const currentTime = Date.now();
        const timeElapsed = currentTime - lastTime;

        const shouldExecute = timeElapsed > delay;
        const shouldSchedule = !timer && trailing;

        if (shouldExecute) {

            if (timer) clearTimeout(timer); 
            executeFunc(this, args);

        } else if (shouldSchedule) {

            timer = setTimeout(() => {
                executeFunc(this, args);
                timer = null; 
            }, delay - timeElapsed);

        } else if (!lastTime && !leading) {
            lastTime = currentTime; 
        }
    };
}






  

  
  
  
  