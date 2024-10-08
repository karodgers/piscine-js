const format = (date, string) =>{

    const tokens = {
        y: date.getFullYear() % 100,
        yyyy: date.getFullYear(), 
        G: date.getFullYear() >= 0 ? 'AD' : 'BC', 
        GGGG: date.getFullYear() >= 0 ? 'Anno Domini' : 'Before Christ',
        M: date.getMonth() + 1,   
        MM: String(date.getMonth() + 1).padStart(2, '0'), 
        MMM: date.toLocaleString('default', { month: 'short' }), 
        MMMM: date.toLocaleString('default', { month: 'long' }), 
        d: date.getDate(),  
        dd: String(date.getDate()).padStart(2, '0'), 
        E: date.toLocaleString('default', { weekday: 'short' }), 
        EEEE: date.toLocaleString('default', { weekday: 'long' }), 
        h: (date.getHours() % 12) || 12,  
        hh: String((date.getHours() % 12) || 12).padStart(2, '0'), 
        m: date.getMinutes(),  
        mm: String(date.getMinutes()).padStart(2, '0'),
        s: date.getSeconds(), 
        ss: String(date.getSeconds()).padStart(2, '0'), 
        H: date.getHours(),   
        HH: String(date.getHours()).padStart(2, '0'),
        a: date.getHours() >= 12 ? 'PM' : 'AM' 
    };

    return formatString.replace(/y{1,4}|G{1,4}|M{1,4}|d{1,2}|E{1,4}|h{1,2}|m{1,2}|s{1,2}|H{1,2}|a/g, match => tokens[match]);

}

