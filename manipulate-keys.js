const filterKeys = (inputObject, checkFunction) => {

    let filteredObject = {};

    let keys = Object.keys(inputObject);

    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];

        if (checkFunction(key)) {

            filteredObject[key] = inputObject[key];
        }
    }
    return filteredObject;
}

const mapKeys = (inputObject, changeFunction) => {

    let transformedObject = {};

    let keys = Object.keys(inputObject);

    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];

        let newKey = changeFunction(key);

        transformedObject[newKey] = inputObject[key];
    }
    return transformedObject;
}

const reduceKeys = (inputObject, combineFunction, initialValue) => {

    let keys = Object.keys(inputObject);

    let result = initialValue !== undefined ? initialValue : keys[0];

    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < keys.length; i++) {
        
        result = combineFunction(result, keys[i]);
    }
    return result;
}