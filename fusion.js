const fusion = (obj1, obj2) =>{

    var newObj = {};
  
    var keys1 = Object.keys(obj1);

    for (var i = 0; i < keys1.length; i++) {

      var key = keys1[i];
  
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {

        newObj[key] = obj1[key].slice();

        for (var j = 0; j < obj2[key].length; j++) {

          newObj[key].push(obj2[key][j]);

        }
      } else if (Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
        
        newObj[key] = obj2[key];

      } else if (typeof obj1[key] === "string") {

        if (obj2[key] !== undefined) {

            newObj[key] = obj1[key] + " " + obj2[key];

          } else {

            newObj[key] = obj1[key];
        }

      } else if (typeof obj1[key] === "number" && typeof obj2[key] === "number") {

        newObj[key] = obj1[key] + obj2[key];

      } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object" && obj1[key] !== null && obj2[key] !== null) {

        newObj[key] = fusion(obj1[key], obj2[key]);
    
      } else if (obj2[key] !== undefined) {

        newObj[key] = obj2[key];

      } else {

        newObj[key] = obj1[key];
      }
    }
  
    var keys2 = Object.keys(obj2);

    for (var i = 0; i < keys2.length; i++) {

      var key = keys2[i];

      if (!(key in newObj)) {

        newObj[key] = obj2[key];
      }
    }
  
    return newObj;

}




  