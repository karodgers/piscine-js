const pyramid = (str, num) => {

    if (typeof str !== 'string') {

        return '';
    }

    if (typeof num !== 'number') {

        return '';
    }

    let result = '';

    for (let i = 1; i <= num; i++) {
        let line = '';

        for (let j = 0; j < num - i; j++) {
            line = line + ' ';
        }

        for (let j = 0; j < 2 * i - 1; j++) {
            line = line + str;
        }

        result = result + line;

        if (i < num) {

            result += '\n';
        }
    }

    return result;
}
