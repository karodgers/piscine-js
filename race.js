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
      const resolvedValues = new Array(count);
      let resolvedCount = 0;
  
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i];
  
        if (p instanceof Promise) {
          p.then((value) => {
            if (resolvedCount < count) {
              resolvedValues[resolvedCount] = value;
              resolvedCount++;
            }
            if (resolvedCount === count) {
              resolve(resolvedValues);
            }
          }).catch(reject);
        } else {
          if (resolvedCount < count) {
            resolvedValues[resolvedCount] = p;
            resolvedCount++;
          }
          if (resolvedCount === count) {
            resolve(resolvedValues);
          }
        }
      }
    });
}
  