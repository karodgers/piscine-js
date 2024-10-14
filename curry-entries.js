const defaultCurry = (obj1) =>{

    return function(obj2) {

      let result = {};

      for (let key in obj1) {
        result[key] = obj1[key];

      }
      for (let key in obj2) {
        result[key] = obj2[key];

      }
      return result;
    };
}
  
const mapCurry = (fn) => {

    return function(obj) {

      let result = {};
      for (let key in obj) {

        let [newKey, newValue] = fn([key, obj[key]]);
        result[newKey] = newValue;
      }
      return result;
    };
}
  
const reduceCurry = (fn) => {

    return function(obj, initialValue) {

      let result = initialValue;

      for (let key in obj) {
        result = fn(result, [key, obj[key]]);
      }
      return result;
    };
}
  
const filterCurry = (fn) => {

    return function(obj) {

      let result = {};
      for (let key in obj) {

        if (fn([key, obj[key]])) {
          result[key] = obj[key];
        }
      }
      return result;
    };
}
  
const reduceScore = (personnel) =>{

    return reduceCurry(function(acc, [name, person]) {

      if (person.isForceUser) {
        return acc + person.pilotingScore + person.shootingScore;
      }
      return acc;

    })(personnel, 0);
}
  
const filterForce = (personnel) => {

    return filterCurry(function([name, person]) {

      return person.isForceUser && person.shootingScore >= 80;

    })(personnel);
}
  
const mapAverage = (personnel)=> {

    return mapCurry(function([name, person]) {

      let averageScore = (person.pilotingScore + person.shootingScore) / 2;

      return [name, { ...person, averageScore: averageScore }];

    })(personnel);
}