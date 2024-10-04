const letterSpaceNumber = (str) => {
    let result = [];
    let i = 0;

    while (i < str.length - 2) { 
        let threeChars = str.slice(i, i + 3);
        
        if (threeChars.match(/^\w\s\d$/)) {
            let nextChar = str[i + 3];
            let isNextCharLetter = nextChar.match(/[a-zA-Z]/) !== null;
            
            if (i + 3 >= str.length || !isNextCharLetter) {
                result.push(threeChars);
            }
        }
        
        i++;
    }

    return result;
}
