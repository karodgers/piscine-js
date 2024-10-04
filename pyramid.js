const pyramid = (character, depth) => {
    let maxWidth = 2 * depth - 1;
    let result = '';

    for (let i = 0; i < depth; i++) {
        let row = '';
        let charCount = 2 * i + 1;
        let spaceCount = (maxWidth - charCount) / 2;

        
        for (let j = 0; j < spaceCount; j++) {
            row += ' ';
        }

        for (let k = 0; k < charCount; k++) {
            row += character;
        }
        result += row;
    
        if (i < depth) {
            result += '\n';
        }

    }
    
    return result;
}

