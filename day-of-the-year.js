const dayOfTheYear = (date) => {

    var month = date.getMonth(); 

    var day = date.getDate(); 

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var year = date.getFullYear();

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        
        daysInMonth[1] = 29; 
    }

    var dayOfYear = 0;
    
    for (var i = 0; i < month; i++) {
        
        dayOfYear += daysInMonth[i];
    }

    dayOfYear += day;

    return dayOfYear;
};

