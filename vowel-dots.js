function vowelDots(str) {

    const vowels = /[aeiou]/i; 

    let newStr = ""; 
  
    for (let i = 0; i < str.length; i++) {

      let char = str[i]; 

      vowels.lastIndex = 0;

      newStr += char; 
  
      if (vowels.test(char)) {
        newStr += "."; 
      }
    }
  
    return newStr; 
}

  