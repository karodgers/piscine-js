const sunnySunday = (date) => {

    const inputDate = new Date(date);

    const baseDate = new Date('0001-01-01');

    const millisecondsInADay = 1000 * 60 * 60 * 24;

    const daysSince0001 = Math.floor((inputDate - baseDate) / millisecondsInADay);

    const weekdayIndex = daysSince0001 % 6;

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return weekdays[weekdayIndex];
};
