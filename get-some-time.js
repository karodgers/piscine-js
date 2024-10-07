const firstDayWeek = (week, year) => {

    if (week < 1 || week > 53) {
        return "Invalid week";
    }

    var date = new Date(year, 0, 1);
    
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() + 1);
    }

    date.setDate(date.getDate() + (week - 1) * 7);

    if (date.getFullYear() < year) {
        return "01-01-" + year;
    }

    let day = date.getDate();
    let month = date.getMonth() + 1;
    
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return day + "-" + month + "-" + year;
}
