const isFriday = (date) =>{
    
    return date.getDay() === 5;
};

const isWeekend = (date) =>{

    const day = date.getDay();

    return day === 0 || day === 6;
};

const isLeapYear = (date) =>{

    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const isLastDayOfMonth = (date) => {

    const nextDay = new Date(date);

    nextDay.setDate(date.getDate() + 1);

    return nextDay.getDate() === 1;
}