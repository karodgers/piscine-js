const letterSpaceNumber = (str) => {
    let result = [];
    let i = 0;

    while (i < str.length - 2) {
        let threeChars = str.slice(i, i + 3);
        
        if (threeChars.match(/^[a-zA-Z] \d$/)) {
            let nextChar = str[i + 3];

            if (i + 3 >= str.length || !nextChar.match(/[a-zA-Z0-9]/)) {
                result.push(threeChars);
            }
        }
        
        i++;
    }

    return result;
}

