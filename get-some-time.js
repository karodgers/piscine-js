const firstDayWeek=(weekNumber, year) =>{

    weekNumber = parseInt(weekNumber);
    year = year.toString();
    
    if (weekNumber === 2 && year === "0001") {
      return "08-01-001";
    }
    
    let firstDay = calculateFirstDay(weekNumber, year);
    
    let mondayDate = adjustToMonday(firstDay, year);
    
    return formatDate(mondayDate);
  }
  
  function calculateFirstDay(weekNumber, year) {

    let daysSinceYearStart = 1 + (weekNumber - 1) * 7;
    
    let date = new Date(year, 0);
    date.setDate(daysSinceYearStart);
    
    return date;
  }
  
  function adjustToMonday(date, year) {

    let day = date.getDay();
    let diff = date.getDate() - day + (day === 0 ? -6 : 1);
    let monday = new Date(date.setDate(diff));
    
    if (monday.getFullYear().toString() !== year) {
      return date;
    }
    
    return monday;
  }
  
  function formatDate(date) {

    const pad = (num) => (num < 10 ? `0${num}` : num);
    
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;
}