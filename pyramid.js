const pyramid = (str, num) => {
    
    if (typeof str !== 'string' || str.length === 0) {
    
        return '';
    }
    
    if (typeof num !== 'number' || num <= 0) {
    
        return '';
    }
    
    let result = '';
    
    const maxWidth = 2 * num - 1;
    
    for (let i = 1; i <= num; i++) {
    
        let line = '';
    
        const symbolsCount = 2 * i - 1;
    
        const spacesBefore = Math.floor((maxWidth - symbolsCount * str.length) / 2);
      
    
        for (let j = 0; j < spacesBefore; j++) {
            line += ' ';
        }
    
        for (let j = 0; j < symbolsCount; j++) {
            line += str;
        }
    
        result += line;
    
        if (i < num) {
            result += '\n';
        }
    }
    return result;
};