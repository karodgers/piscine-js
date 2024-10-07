const firstDayWeek = (week, year) => {

    if (week < 1 || week > 53) {
        return;
    }

    var date = new Date(year, 0, 1 + (week - 1) * 7);
   
    var day = date.getDate();
    
    var month = date.getMonth() + 1;
    
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1);
        
        day = date.getDate();
        month = date.getMonth() + 1;
    }
    
    if (date.getFullYear() < year) {
        return "01-01-" + year;
    }

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return day + "-" + month + "-" + year;
}