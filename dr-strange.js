const addWeek = (date)=> {

    const days = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
        "Sunday", 
        "secondMonday", 
        "secondTuesday", 
        "secondWednesday", 
        "secondThursday", 
        "secondFriday", 
        "secondSaturday", 
        "secondSunday"
    ];
  
    const epoch = new Date('0001-01-01');
    
    const diffDays = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
    
    const weekDayIndex = diffDays % 14;

    return days[weekDayIndex];
};

const timeTravel = ({ date, hour, minute, second }) => {

    const newDate = new Date(date);
  
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    
    return newDate;
};

