const letterSpaceNumber = (str) => {
    let result = [];
    let i = 0;

    while (i < str.length - 1) { 

        if (/[a-zA-Z]/.test(str[i])) {

            if (str[i + 1] === ' ' && /\d/.test(str[i + 2]) && str[i + 2] < '10') {

                if (i + 3 >= str.length || !/[a-zA-Z]/.test(str[i + 3])) {
                    result.push(str[i] + ' ' + str[i + 2]);
                }
            }
        }
        i++;
    }

    return result;
}
