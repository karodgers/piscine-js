const all = (promisesObj) =>{

    const keys = Object.keys(promisesObj);
    
    const promises = keys.map(key => promisesObj[key]);
  
    return Promise.all(promises).then(results => {

        const resolvedObj = {};
  
      keys.forEach((key, index) => {
        resolvedObj[key] = results[index];
      });
  
      return resolvedObj; 
    });
}