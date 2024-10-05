
const vowels = /[aeiou]/i; 

const vowelDots = (str)=>{

    
    let newStr = ""; 
  
    for (let i = 0; i < str.length; i++) {

      let char = str[i]; 

      newStr += char; 
  
      if (vowels.test(char)) {
        newStr += "."; 
      }
    }
  
    return newStr; 
}

  