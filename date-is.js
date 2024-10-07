const isValid = (date) =>{

    if (typeof date === 'number') {
        date = new Date(date);
    }

    return date instanceof Date && !isNaN(date);
};

const isAfter = (date1, date2) =>{

    return isValid(date1) && isValid(date2) && date1 > date2;
};

const isBefore = (date1, date2) =>{
    return isValid(date1) && isValid(date2) && date1 < date2;
};

const isFuture = (date) => {

    return isValid(date) && date > new Date();
};

const isPast = (date) => {

    return isValid(date) && date < new Date();
};