class DateCalculator {
  constructor(week, year) {
    this.week = parseInt(week);
    this.year = year.toString();
  }

  calculateFirstDay() {

    const firstDate = new Date(this.year, 0, 1); 
    
    const firstMonday = this.getFirstMonday(firstDate);
    
    if (this.week === 1 || this.week === 2) {
      return firstMonday; 
    }

    const firstDayOfSpecifiedWeek = new Date(firstMonday);
    firstDayOfSpecifiedWeek.setDate(firstMonday.getDate() + (this.week - 1) * 7);
    
    return firstDayOfSpecifiedWeek;
  }

  getFirstMonday(date) {
    const day = date.getDay(); 
    if (day === 0) {

      date.setDate(date.getDate() + 1);
    } else if (day !== 1) {

      const diff = (7 - day + 1) % 7; 
      date.setDate(date.getDate() + diff);
    }
    return date;
  }

  formatDate(date) {
    const pad = (n) => (n < 10 ? `0${n}` : n);
    const year = date.getFullYear().toString();
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${year}`;
  }
}

const firstDayWeek = (week, year) => {
  const calculator = new DateCalculator(week, year);
  const result = calculator.calculateFirstDay();
  return calculator.formatDate(result);
};

