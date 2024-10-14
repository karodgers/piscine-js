
const filterValues = (inputObject, checkFunction) => {

  let filteredObject = {};

  let keys = Object.keys(inputObject);

    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];

        let value = inputObject[key];

        if (checkFunction(value)) {

            filteredObject[key] = value;
        }
    }
}
const mapValues = (inputObject, changeFunction)=> {

    let transformedObject = {};

    let keys = Object.keys(inputObject);
  
    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];
  
      let value = inputObject[key];
  
      transformedObject[key] = changeFunction(value);
    }
  
    return transformedObject;
}
  
const reduceValues = (inputObject, combineFunction) =>{

    let total = 0;

    let keys = Object.keys(inputObject);
  
    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];
  
      let value = inputObject[key];
  
      total = combineFunction(total, value);
    }
  
    return total;
}