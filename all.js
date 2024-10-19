const all = (promisesObj) =>{

    const resolvedObj = {};
    const keys = Object.keys(promisesObj);
  
    return new Promise((resolve, reject) => {
      if (keys.length === 0) {
        resolve({});
        return;
      }
  
      let resolvedCount = 0;
  
      keys.forEach(key => {
        const value = promisesObj[key];
  
        if (value && typeof value.then === 'function') {

          value.then(result => {
            resolvedObj[key] = result;
            resolvedCount++;
            
            if (resolvedCount === keys.length) {
              resolve(resolvedObj);
            }
          }).catch(error => {
            reject(error);
          });
        } else {

          resolvedObj[key] = value;
          resolvedCount++;

          if (resolvedCount === keys.length) {
            resolve(resolvedObj);
          }
        }
      });
    });
}
  
 
  