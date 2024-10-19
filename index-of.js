
const indexOf = (array, searchElement, fromIndex) =>{
    var length = array.length;
    var i = fromIndex || 0;
    
    if (i < 0) {
      i = length + i;
      if (i < 0) {
        i = 0;
      }
    }
    
    while (i < length) {
      if (array[i] === searchElement) {
        return i;
      }
      i = i + 1;
    }
    
    return -1;
}

const lastIndexOf = (array, searchElement, fromIndex) => {
    var length = array.length;
    var i = fromIndex === undefined ? length - 1 : fromIndex;
    
    if (i >= length) {
      i = length - 1;
    }
    if (i < 0) {
      i = length + i;
    }
    
    while (i >= 0) {
      if (array[i] === searchElement) {
        return i;
      }
      i = i - 1;
    }
    
    return -1;
}

function includes(array, searchElement, fromIndex) {
    var length = array.length;
    var i = fromIndex || 0;
    
    if (i < 0) {
      i = length + i;
      if (i < 0) {
        i = 0;
      }
    }
    
    while (i < length) {
      if (array[i] === searchElement) {
        return true;
      }
      i = i + 1;
    }
    
    return false;
  }