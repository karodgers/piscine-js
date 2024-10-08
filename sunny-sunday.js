const sunnySunday = (date) => {

    const inputDate = new Date(date);

    const dayOfWeek = inputDate.getUTCDay();


    if (dayOfWeek === 0) {
        return 'Saturday';
    }

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return weekdays[dayOfWeek - 1];
};
