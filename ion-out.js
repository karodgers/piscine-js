const ionOut = (str) => {

    const regex = /\b(\w*?t)(?=ion)\w*\b/g;
    
    let matches = [];
    let match = regex.exec(str); 

    while (match !== null) {

        matches.push(match[1]);
        match = regex.exec(str); 
    }

    return matches;
};