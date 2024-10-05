const sameAmount = (str, reg1, reg2) => {
    let count1 = 0;
    let count2 = 0;
  
    const strCopy1 = str;
    
    while (reg1.test(strCopy1)) {
      count1++;
      strCopy1 = strCopy1.replace(reg1, '');
    }
  
    const strCopy2 = str;
    
    while (reg2.test(strCopy2)) {
      count2++;
      strCopy2 = strCopy2.replace(reg2, '');
    }
  
    return count1 === count2;
  };