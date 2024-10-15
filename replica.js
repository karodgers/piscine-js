function replica(target, ...sources) {

    for (let i = 0; i < sources.length; i++) {

      const source = sources[i];
      
      for (let key in source) {

        if (source[key] instanceof RegExp) {

          target[key] = new RegExp(source[key]);

        } else if (typeof source[key] === 'function') {

          target[key] = source[key];

        } else if (Array.isArray(source[key])) {

          if (!Array.isArray(target[key])) {

            target[key] = [];
          }
          for (let j = 0; j < source[key].length; j++) {

            target[key][j] = source[key][j];
          }

        } else if (source[key] !== null && typeof source[key] === 'object') {

          if (typeof target[key] !== 'object' || target[key] === null) {

            target[key] = {};
          }
          replica(target[key], source[key]);

        } else {
            
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  