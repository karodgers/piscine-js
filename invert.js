const invert = (obj)=>{
    
    var newObj = {};
    var keys = Object.keys(obj);
    
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      newObj[obj[key]] = key;
    }
    
    return newObj;
}

  