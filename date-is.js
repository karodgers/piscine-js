const isValid = (date) =>{

    date = new Date(date);
    
    return date instanceof Date && !isNaN(date.getTime());
};

const isAfter = (date1, date2) => {

    return date1 > date2;

};
const isBefore = (date1, date2) => {
    return date2 > date1;

};
const isFuture = (date) =>{

    date = new Date(date);

    return date instanceof Date && !isNaN(date.getTime()) && date.getTime() > Date.now();

};

const isPast = (date) => {
    date = new Date(date);

    return date instanceof Date && !isNaN(date.getTime()) && date.getTime() < Date.now();
};


