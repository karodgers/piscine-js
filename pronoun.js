const pronoun = (str) =>{

    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words = str.replace(/[\n,]/g, ' ').split(' ');
    const result = {};
  
    for (let i = 0; i < words.length; i++) {

      const currentWord = words[i].toLowerCase();
  
      if (pronouns.includes(currentWord)) {

        if (!result[currentWord]) {

          result[currentWord] = { word: [], count: 0 };
        }
  
        result[currentWord].count++;
  
        if (i + 1 < words.length) {

          const nextWord = words[i + 1].toLowerCase();
          
          if (!pronouns.includes(nextWord)) {
            
            result[currentWord].word.push(nextWord);
          }
        }
      }
    }
  
    return result;

}