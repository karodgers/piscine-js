const citiesOnly = (arr) =>{

    return arr.map(function(cityObj) {

        return cityObj.city; 
    });
};

const upperCasingStates = (arrStr) =>{

    return arrStr.map(function(state) {
        return state

            .split(' ') 

            .map(function(word) {

            return word.charAt(0).toUpperCase() + word.slice(1); 
        })
        .join(' '); 
    });
};

const fahrenheitToCelsius = (arrStr) => {
    
    return arrStr.map(function(temp) {

        const fahrenheit = parseFloat(temp); 
        
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9); 
        
        return celsius + '°C';
    });
};

const trimTemp = (arrObjects) => {

    return arrObjects.map(function(cityObj) {

        return {
            city: cityObj.city, 
            state: cityObj.state, 
            region: cityObj.region,
            temperature: cityObj.temperature.split(' ').join('') 
        };
    });
    
};

const tempForecasts = (arrObjects) =>{

    return arrObjects.map(function(cityObj) {

        const fahrenheit = parseFloat(cityObj.temperature); 

        const celsius = Math.floor((fahrenheit - 32) * 5 / 9); 

        const stateCapitalized = cityObj.state
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
               
        return `${celsius}°Celsius in ${cityObj.city}, ${stateCapitalized}`;
    });
};