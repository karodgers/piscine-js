const get = (src, path) => {
    
    let value = src;

    for (let i = 0; i < path.length; i++) {
        let key = '';

        while (i < path.length && path[i] !== '.') {
            key += path[i];
            i++;
        }

        if (value[key] === undefined) {
            return undefined;
        }
        value = value[key];
    }

    return value;
};


