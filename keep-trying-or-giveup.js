const retry = (count, callback) => {
 
  return async (...args) => {
    let attempts = 0;
    while (true) {
      try {
        return await callback(...args);
      } catch (error) {
        attempts++;
        if (attempts > count) {
          throw error;
        }
      }
    }
  };
};

const timeout = (delay, callback) => {
  
  return async (...args) => {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error('timeout')), delay);
    });

    try {
      const result = await Promise.race([
        callback(...args),
        timeoutPromise
      ]);
      clearTimeout(timeoutId);
      return [result]; 
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  };
};