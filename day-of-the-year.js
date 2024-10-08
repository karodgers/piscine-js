const dayOfTheYear = (date) => {

    var startOfYear = new Date(date.getFullYear(), 0, 1);

    var millisecondsInADay = 86400000; 

    var difference = (date.getTime() - startOfYear.getTime()) / millisecondsInADay;

    return Math.floor(difference) + 1; 
}

