const pyramid = (character, depth) =>{
    let maxWidth = 2 * depth - 1;
     let result = ''
   
    
    for (let i = 0; i < depth; i++) {
      
      let row = "";
      let charCount = 2 * i + 1;
      let spaceCount = (maxWidth - charCount) / 2;
      
      for (let j = 0; j < spaceCount; j++) {
        
          row = row + " ";
        
        
      }
      
      for (let k = 0; k < charCount; k++) {
        row = row + character;
      }
      
      for (let l = 0; l < spaceCount; l++) {
        row = row + " ";
      }
      
      result = result + row + '\n'
    }
    return result;
  }