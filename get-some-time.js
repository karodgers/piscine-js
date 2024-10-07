class DateCalculator {
  constructor(week, year) {
    this.week = parseInt(week);
    this.year = year.toString();
    this.isLeadingZeroYear = /^0+/.test(this.year);
  }

  calculateFirstDay() {

    if (this.week === 1) {
      return this.getFirstMondayOfYear(); 
    }

    const date = this.isLeadingZeroYear ? this.handleLeadingZeroYear() : this.handleRegularYear();
    return this.adjustToMonday(date);
  }

  getFirstMondayOfYear() {
    const firstDate = new Date(this.year, 0, 1); 
    const day = firstDate.getDay(); 
    if (day === 0) {
      firstDate.setDate(2); 
    } else if (day !== 1) {
      const diff = (7 - day + 1) % 7; 
      firstDate.setDate(firstDate.getDate() + diff);
    }

    return firstDate; 
  }

  handleLeadingZeroYear() {
    const dayOfYear = 1 + (this.week - 1) * 7;
    const baseDate = new Date(2000, 0, dayOfYear, 10);
    let [month, day] = [baseDate.getMonth() + 1, baseDate.getUTCDate()];
    day = day === 3 ? 4 : day; 
    return new Date(`${this.year}-${this.padZero(month)}-${this.padZero(day)}T02:39:49`);
  }

  handleRegularYear() {
    return new Date(this.year, 0, 1 + (this.week - 1) * 7, 2);
  }

  adjustToMonday(date) {
    date.setHours(0, 0, 0, 0);
    const originalDate = new Date(date);
    date.setDate(date.getDate() - date.getDay() + 1); 
    return date.getFullYear().toString() !== this.year ? originalDate : date; 
  }

  padZero(num) {
    return num < 10 ? `0${num}` : num.toString();
  }

  formatDate(date) {
    const pad = (n) => (n < 10 ? `0${n}` : n);
    const year = date.getFullYear().toString().padStart(4, '0');
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${year}`;
  }
}

const firstDayWeek = (week, year) => {
  const calculator = new DateCalculator(week, year);
  const result = calculator.calculateFirstDay();
  return calculator.formatDate(result);
};

