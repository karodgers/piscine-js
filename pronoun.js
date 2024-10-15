const pronoun = (str) => {

    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words = str.split(' ');
    const result = {};
  
    for (let i = 0; i < words.length; i++) {

      const currentWord = words[i].toLowerCase();
      
      for (let j = 0; j < pronouns.length; j++) {

        if (currentWord === pronouns[j]) {

          if (!result[currentWord]) {

            result[currentWord] = { word: [], count: 0 };
          }
          
          result[currentWord].count++;
  
          if (i + 1 < words.length) {

            result[currentWord].word.push(words[i + 1]);
          }
        }
      }
    }
  
    return result;
};