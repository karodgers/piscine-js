const sunnySunday = (date) => {

    const inputDate = new Date(date);
    
    const dayOfWeek = inputDate.getUTCDay();

    const adjustedDay = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return weekdays[adjustedDay];
}
