const pyramid = (str, num) => {
    let maxWidth = (2 * num - 1) * str.length;
    let result = '';

    for (let i = 0; i < num; i++) {
        let row = '';
        let charCount = (2 * i + 1) * str.length;
        let spaceCount = (maxWidth - charCount) / 2;

        for (let j = 0; j < spaceCount; j++) {
            row += ' ';
        }

        for (let k = 0; k < charCount / str.length; k++) {
            row += str;
        }

        result += row;

        if (i < num - 1) {
            result += '\n';
        }
    }

    return result;
}
