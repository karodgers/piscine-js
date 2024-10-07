const matchCron = (cronString, date) => {
    const [cronMinute, cronHour, cronDay, cronMonth, cronWeekday] = cronString.split(' ');
    const minute = date.getMinutes();
    const hour = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const weekday = date.getDay() || 7; 

    const matches = (cronPart, value) => cronPart === '*' || cronPart == value;

    return (
        matches(cronMinute, minute) &&
        matches(cronHour, hour) &&
        matches(cronDay, day) &&
        matches(cronMonth, month) &&
        matches(cronWeekday, weekday)
    );
}