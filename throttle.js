const createThrottle = (wait = 0) => {
    let lastInvoked = 0;
    let timeoutId = null;
  
    return (func, options = { leading: true, trailing: true }) => {
      return (...args) => {
        const { leading, trailing } = options;
        const now = Date.now();
        const remainingTime = wait - (now - lastInvoked);
  
        const invokeFunction = () => {
          lastInvoked = now;
          func(...args);
        };
  
        const scheduleTrailing = () => {
          timeoutId = setTimeout(() => {
            const shouldInvoke = Date.now() - lastInvoked >= wait;
            if (shouldInvoke && trailing) {
              invokeFunction();
            }
          }, wait);
        };
  
        if (remainingTime <= 0) {
          clearTimeout(timeoutId);
          if (leading) {
            invokeFunction();
          }
          scheduleTrailing();
        } else if (!timeoutId && trailing) {
          scheduleTrailing();
        }
      };
    };
};
  
const throttle = createThrottle();
const opThrottle = createThrottle();