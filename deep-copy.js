const deepCopy = (obj) =>{

    if (Array.isArray(obj)) {

      const copy = [];

      for (let i = 0; i < obj.length; i++) {

        copy[i] = deepCopy(obj[i]);

      }
      return copy;

    } else if (obj !== null && typeof obj === 'object') {

      const copy = {};

      for (let i=0; i< obj.lenght; i++) {

        copy[key] = deepCopy(obj[key]);
      }
      
      return copy;
    }
    return obj;
}
  