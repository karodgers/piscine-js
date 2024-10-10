const currify = (fn) => {
    
    return function curried(...args) {

      if (args.length >= fn.length) {

        return fn(...args);
      }
      return (...moreArgs) => curried(...args, ...moreArgs);
    };
};