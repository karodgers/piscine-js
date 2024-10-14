const pick = (obj, keys) =>{

    var newObj = {};
  
    if (typeof keys === "string") {
      keys = [keys];
    }
    
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key in obj) {
        newObj[key] = obj[key];
      }
    }
    
    return newObj;
}

const omit = (obj, keys) => {

    var newObj = {};
  
    if (typeof keys === "string") {
      keys = [keys];
    }
  
    var objKeys = Object.keys(obj); 
  
    for (var i = 0; i < objKeys.length; i++) {

      var key = objKeys[i];
      
      if (keys.includes(key) === false) {
        newObj[key] = obj[key];
      }
    }
  
    return newObj;
}

