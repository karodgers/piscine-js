const flags = (obj) => {

    var alias = { h: 'help' }; 
    var descriptions = [];
    var aliasMap = {}; 
  
    for (var key in obj) {

      if (key === 'multiply') {

        alias['m'] = 'multiply';

      } else if (key === 'divide') {

        alias['d'] = 'divide';

      } else if (key !== 'help') {

        var firstLetter = key[0];
        
        if (!aliasMap[firstLetter]) {

          aliasMap[firstLetter] = key;
          alias[firstLetter] = key;

        } else {

          var parts = key.split('-');
          if (parts.length > 1) {

            var secondLetter = parts[1][0];
            alias[secondLetter] = key;
          }
        }
      }
    }
  
    if (!obj.help) {

      for (var key in obj) {

        if (key !== 'help') {

          var aliasKey = key[0];
          descriptions.push('-' + aliasKey + ', --' + key + ': ' + obj[key]);
        }
      }

    } else {

      for (var i = 0; i < obj.help.length; i++) {

        var flag = obj.help[i];
        var aliasKey = flag[0];

        if (obj[flag]) {
          descriptions.push('-' + aliasKey + ', --' + flag + ': ' + obj[flag]);
        }
      }
    }
  
    return {
      alias: alias,
      description: descriptions.join('\n')
    };
}

  