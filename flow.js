function flow(funcs) {

    if (!Array.isArray(funcs)) {
        
        return 'Error';
    }
  
    return function(...args) {

      let result; 
  
      for (let i = 0; i < funcs.length; i++) {

        if (i === 0) {

          result = funcs[i](...args); 

        } else {

            result = funcs[i](result); 
        }
      }
  
      return result;
    };
}
  