function race(promises) {

    return new Promise((resolve, reject) => {

      for (let i = 0; i < promises.length; i++) {

        let p = promises[i];

        if (p instanceof Promise) {
          p.then(resolve).catch(reject);
        } else {
          resolve(p);
        }
      }
    });
  }
  
  function some(promises, count) {

    if (count === 0) {
      return new Promise((resolve) => resolve([]));
    }
  
    if (promises.length === 0) {
      return new Promise((resolve) => resolve([]));
    }
  
    return new Promise((resolve, reject) => {

      let resolvedValues = new Array(count);
      let resolvedCount = 0;
      let indexMap = new Map();
  
      for (let i = 0; i < promises.length; i++) {

        let p = promises[i];
  
        indexMap.set(i, resolvedCount);

        if (p instanceof Promise) {

          p.then((value) => {
            resolvedValues[indexMap.get(i)] = value;
            resolvedCount++;

            if (resolvedCount === count) {
              resolve(resolvedValues);
            }
          }).catch(reject);

        } else {

          resolvedValues[indexMap.get(i)] = p;
          resolvedCount++;
          
          if (resolvedCount === count) {
            resolve(resolvedValues);
          }
        }
      }
    });
  }
  
  