const debounce = (func, wait) => {

    let timeout;
  
    return function() {

      const context = this;
      const args = arguments;
  
      clearTimeout(timeout);
  
      timeout = setTimeout(function() {

        func.apply(context, args);

      }, wait);
    };
}
  
const opDebounce = (func, wait, options) => {

    let timeout;
    
    return function() {

      const context = this;
      const args = arguments;
      
      const callNow = options.leading && !timeout;
  
      clearTimeout(timeout);
  
      timeout = setTimeout(function() {

        timeout = null;

        if (!options.leading) func.apply(context, args);
        
      }, wait);
  
      if (callNow) func.apply(context, args);
    };
    
}
