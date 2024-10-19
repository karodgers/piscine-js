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

    if (promises.length === 0 || count === 0) {
      return new Promise((resolve) => resolve(undefined)); 
    }
  
    return new Promise((resolve, reject) => {

      let resolvedValues = [];
      let resolvedCount = 0;
  
      for (let i = 0; i < promises.length; i++) {
        
        let p = promises[i];
  
        if (p instanceof Promise) {

            p.then((value) => {
            resolvedValues.push(value);
            resolvedCount++;

            if (resolvedCount === count) {
              resolve(resolvedValues); 
            }
          }).catch(reject); 
        } else {

          resolvedValues.push(p);
          resolvedCount++;
          if (resolvedCount === count) {
            resolve(resolvedValues);
          }
        }
      }
    });
}
  
  