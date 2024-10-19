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
        
        const promise = promisesObj[key];
        promise.then(result => {
          resolvedObj[key] = result;
          resolvedCount++;
  
          if (resolvedCount === keys.length) {
            resolve(resolvedObj);
          }
        }).catch(error => {
          reject(error);
        });
      });
    });
}
  
 
  