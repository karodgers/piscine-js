const filterEntries = (inputObject, checkFunction) => {

    let filteredObject = {};
    
    let entries = Object.entries(inputObject);
    
    for (let i = 0; i < entries.length; i++) {

      let [key, value] = entries[i];

      if (checkFunction([key, value])) {

        filteredObject[key] = value;
      }
    }
    return filteredObject;
};
  
const mapEntries = (inputObject, changeFunction) => {

    let transformedObject = {};

    let entries = Object.entries(inputObject);

    for (let i = 0; i < entries.length; i++) {

      let [key, value] = changeFunction([entries[i][0], entries[i][1]]);

      transformedObject[key] = value;
    }
    return transformedObject;
  };
  
const reduceEntries = (inputObject, combineFunction, initialValue) => {

    let entries = Object.entries(inputObject);

    let result = initialValue !== undefined ? initialValue : entries[0];

    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < entries.length; i++) {

      result = combineFunction(result, [entries[i][0], entries[i][1]]);

    }
    return result;
};

const totalCalories = (cart) => {

    let total = reduceEntries(cart, (total, [item, grams]) => {

      let caloriesPer100g = nutritionDB[item].calories;

      return total + (caloriesPer100g * grams) / 100;

    }, 0);
  
    return Math.round(total * 10) / 10;
};
  
const lowCarbs = (cart) => {

    return filterEntries(cart, ([item, grams]) => {

      let carbsPer100g = nutritionDB[item].carbs;

      return (carbsPer100g * grams) / 100 < 50;
    });
};
  
const cartTotal = (cart) => {

    return mapEntries(cart, ([item, grams]) => {

      let nutritionFacts = nutritionDB[item];

      let totalFacts = {};

      for (let key in nutritionFacts) {

        totalFacts[key] = Math.round((nutritionFacts[key] * grams) / 100 * 1000) / 1000;
      }
      return [item, totalFacts];

    });
};
  
  