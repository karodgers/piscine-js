const deepCopy = (obj) => {

    if (Array.isArray(obj)) {

      const copy = [];
      for (let i = 0; i < obj.length; i++) {

        copy[i] = deepCopy(obj[i]);

      }
      return copy;

    } else if (obj !== null && typeof obj === 'object') {

      if (obj instanceof RegExp) {

        return new RegExp(obj);

      } else if (typeof obj === 'function') {

        return obj; 
      }
      
      const copy = {};
      const keys = Object.keys(obj);

      for (let i = 0; i < keys.length; i++) {

        const key = keys[i];

        copy[key] = deepCopy(obj[key]);
      }
      
      return copy;
    }
    return obj;
};
  