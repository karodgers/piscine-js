const retry = (count, callback) => {
  return async function (...args) {
    let attempts = 0;

    while (attempts <= count) {
      try {
        return await callback(...args);
      } catch (error) {
        attempts++;

        if (attempts > count) {
          throw new Error('Too many errors');
        }
      }
    }
  };
};

const timeout = (delay, callback) => {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('timeout'));
      }, delay);

      callback(...args)
        .then(result => {
          clearTimeout(timer);
          resolve(result);
        })
        .catch(error => {
          clearTimeout(timer);
          reject(error);
        });
    });
  };
};
